import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { List, Divider, ListItem, ListItemText } from '@material-ui/core';
import { Routes } from '../../routes/routes';
import { NavLink } from 'react-router-dom';

export default class MobileNav extends Component {

  state = {
    isOpen: false
  }

  toggleDrawer = (isOpen = true) => this.setState({isOpen});

  sideList() {

    const { handleRouteChange } = this.props;

    return (
      <div
        className={styles.list}
        role="presentation"
        onClick={() => this.toggleDrawer(false)}
        onKeyDown={() => this.toggleDrawer(false)}
      >
        <List>
          {Routes.map((route, i) => (
            <NavLink
              key={i}
              className="narrow-navLink"
              to={route.path}
              onClick={() => handleRouteChange(route.path)}
            >
              <ListItem button>
                <ListItemText primary={route.name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
      </div>
    )
  }

  render() {

    const { isOpen } = this.state;

    return (
      <div id="narrow-nav">
        <HamburgerButton
          toggleDrawer={this.toggleDrawer.bind(this)}
          isOpen={isOpen}
        />
        <SwipeableDrawer
          open={isOpen}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
        >
          {this.sideList()}
        </SwipeableDrawer>
      </div>
    )
  }
}

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};