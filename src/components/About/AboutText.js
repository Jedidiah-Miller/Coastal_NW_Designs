import React from 'react';
import { title, par1, par2 } from './AboutData';
import './styles.css'


export default function AboutText({data = [par1, par2]}) {

  return (
    <div id="text-container">
      <h1 id="about-title">{title}</h1>
      {data.map((par, i) =>
        <div id="text-box" key={i}>
          <p className="text-box-text">
            {par}
          </p>
        </div>
      )}
    </div>
  )
}
