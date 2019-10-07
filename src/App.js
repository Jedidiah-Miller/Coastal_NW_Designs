import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
import { Header, NavBar, Footer } from './components/index';
import './App.css'


export default class App extends Component {

  state = {
    currentRoute: '/',
    isHomePage: true
  }

  componentDidMount() {
    console.log('mounted');
    const arr = window.location.href.split('/'); // I dont like these bet for now they're fine
    this.handleRouteChange(arr[arr.length - 1]); // I dont like these bet for now they're fine
  }

  handleRouteChange(r) {
    this.setState({
      currentRoute: r,
      isHomePage: r === '' || r === '/' || r === 'home'
    });
  }

  render() {

    const { isHomePage } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <NavBar handleRouteChange={this.handleRouteChange.bind(this)}/>
          {isHomePage ? null : <Header />}
          <div id="content-container">
            <Route exact={true} path='/' component={HomeScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/contact' component={ContactScreen} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
