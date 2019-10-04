import React from 'react';
import Header from '../Header/LogoHeader';
import './TitlePhoto.css';


const TitlePhoto = () => {
  return (
    <div id="bg">
      <figure id="header-container">
        <div id="frame" />
        <figcaption>
          <Header id="centered" />
        </figcaption>
      </figure>
    </div>
  );
};

export default TitlePhoto;