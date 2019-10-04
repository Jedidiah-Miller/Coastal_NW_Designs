import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes';


export default function NavLinks(props) {
  const { handleRouteChange } = props;
  return (
    <div>
      {Routes.map((route, i) =>
        <NavLink className="navLink" key={i} to={route.path} onClick={() => handleRouteChange(route.path)}>
          <span className="navText">
            {route.name}
          </span>
        </NavLink>
      )}
    </div>
  )
}
