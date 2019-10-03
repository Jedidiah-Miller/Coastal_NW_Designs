import React from 'react';
import { photo1, photo2, photo3, photo4, photo5, photo6 } from '../../assets/HomePage';
import './styles.css'


export default function MainContent() {
  return (
    <div id="main-content">
      <img
        id="main-image"
        src="https://i0.wp.com/kfinteriordesign.com/wp-content/uploads/2018/02/Kirsten-Floyd-Interior-Design-Family-Room.jpg?fit=2068%2C1372"
        alt="nope"
      />

      <hr/>
      <h1>Distinctive Residential and Commercial Interior Design</h1>

      <div className="dual-image">
        <img src={photo1} alt="🏠" />
        <img src={photo2} alt="🏠" />
      </div>

      <hr/>
      <div className="dual-image">
        <img src={photo3} alt="🏠" />
        <img src={photo4} alt="🏠" />  
      </div>

      <hr/>
      <div className="dual-image">
        <img src={photo5} alt="🏠" />
        <img src={photo6} alt="🏠" />  
      </div>

    </div>
  )
}
