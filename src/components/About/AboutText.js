import React from 'react';
import { par1, par2} from './AboutData';
import './styles.css'



export default function AboutText() {
  return (
    <div id="text-container">
      <div id="text-box">
        <p>{par1}</p>
      </div>
      <div id="text-box">
        <p>{par2}</p>
      </div>
    </div>
  )
}
