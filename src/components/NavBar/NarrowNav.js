import React, { Component } from 'react';
import NavLinks from './NavLinks';
import HamburgerMenuButton from 'react-hamburger-menu';


export default class NarrowNav extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({isOpen: !this.state.isOpen});

  getStyles = isOpen => {
    return {
      narrowNav: {
        height: isOpen ? '20%' : 0,
        transition: 'height 0.3s ease-in-out',
        zIndex: 2,
      }
    }
  }
  
  render() {

    const { isOpen } = this.state;
    const styles = this.getStyles(isOpen);

    return (
      <div id="narrow-nav" style={styles.narrowNav}>
        <HamburgerMenuButton
          isOpen={isOpen}
          menuClicked={this.toggleOpen.bind(this)}
          width={25}
          height={22}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={3}
          animationDuration={0.3}
        />
        <div id="links">
          <NavLinks handleRouteChange={this.props.handleRouteChange} />
        </div>
      </div>
    )
  }
}