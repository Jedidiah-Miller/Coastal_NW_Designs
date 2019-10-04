import React from 'react';
import TitleLogo from './TitlePhoto';
import { photo1, photo2, photo3, photo4, photo5, photo6 } from '../../assets/HomePage';
import './styles.css'


export default function MainContent() {
  return (
    <div id="main-content">
      <TitleLogo />
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
