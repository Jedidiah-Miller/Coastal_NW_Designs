import React from 'react';
import Header from '../Header/LogoHeader';
import { mainPhoto } from '../../assets/HomePage';
import './TitlePhoto.css';


const TitlePhoto = () => {
  return (
    <figure id="header-container">
      <img id="main-image" src={mainPhoto} alt="nope" />
      <figcaption>
        <Header id="centered" />
      </figcaption>
    </figure>
  );
};

export default TitlePhoto;