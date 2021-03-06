import React from 'react';
import WideNav from './WideNav';
import NarrowNav from './MobileNav';
import './styles.css';


export default function NavBar(props) {

  const { handleRouteChange } = props;

  return (
    <nav>
      <WideNav handleRouteChange={handleRouteChange} />
      <NarrowNav handleRouteChange={handleRouteChange} />
    </nav>
  )
}
