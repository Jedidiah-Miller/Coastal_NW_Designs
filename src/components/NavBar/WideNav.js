import React from 'react';
import NavLinks from './NavLinks';


export default function WideNav(props) {
  return (
    <div id="wide-nav">
      <NavLinks handleRouteChange={props.handleRouteChange} />
    </div>
  )
}
