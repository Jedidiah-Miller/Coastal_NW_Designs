import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
            <ListItem button key={i}>
              <NavLink
                className="narrow-navLink"
                key={i}
                to={route.path}
                onClick={() => handleRouteChange(route.path)}
              >
                <ListItemText primary={route.name} />
              </NavLink>
            </ListItem>
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