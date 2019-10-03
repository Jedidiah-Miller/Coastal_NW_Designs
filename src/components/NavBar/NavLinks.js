import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes';


export default function NavLinks() {
  return (
    <div>
      {Routes.map((route, i) =>
        <NavLink className="navLink" key={i} to={route.path}>
          <span className="navText">
            {route.name}
          </span>
        </NavLink>
      )}
    </div>
  )
}
