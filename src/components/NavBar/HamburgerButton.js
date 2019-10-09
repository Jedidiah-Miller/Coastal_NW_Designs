import React from 'react';
import Hamburger from 'react-hamburger-menu';

export default function HamburgerButton({toggleDrawer, isOpen}) {
  return (
    <Hamburger
      isOpen={isOpen}
      menuClicked={toggleDrawer}
      width={22}
      height={18}
      strokeWidth={1}
      rotate={0}
      color='black'
      borderRadius={0}
      animationDuration={0.3}
    />
  )
}
