import React from 'react';
import TitleLogo from '../TitlePhoto/TitlePhoto';
import { photo1, photo2, photo3, photo4, photo5 } from './ImageData';
import LazyLoad from 'react-lazyload';
import './styles.css';


export default function MainContent() {
  return (
    <LazyLoad once={true}>
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
        <div className="full-image">
          <img src={photo5} alt="🏠" />
        </div>
      </div>
    </LazyLoad>
  )
}
