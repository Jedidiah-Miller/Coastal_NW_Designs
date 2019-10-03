import React, { Component } from 'react';
import NavLinks from './NavLinks';
import HamburgerMenuButton from 'react-hamburger-menu';
import './narrow-nav.css';

export default class NarrowNav extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({isOpen: !this.state.isOpen});
  
  render() {

    const { isOpen } = this.state;
    const styles = {
      height: isOpen ? '20%' : 0
    }
    return (
      <div id="narrow-nav" style={styles}>
        <HamburgerMenuButton
          isOpen={isOpen}
          menuClicked={this.toggleOpen.bind(this)}
          width={25}
          height={22}
          strokeWidth={2}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.3}
        />
        <div id="links">
          <NavLinks />
        </div>
      </div>
    )
  }
}