import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
import { Header, NavBar, Footer } from './components/index';
import './App.css'


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <div id="content-container">
          <Route exact={true} path='/' component={HomeScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
