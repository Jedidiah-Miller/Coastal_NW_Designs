import React from 'react';
import WideNav from './WideNav';
import NarrowNav from './NarrowNav';
import './styles.css';


export default function NavBar() {

  return (
    <nav>
      <WideNav />
      <NarrowNav />
    </nav>
  )
}
