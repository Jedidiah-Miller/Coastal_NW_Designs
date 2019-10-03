import React from 'react';
import './styles.css'

const src = 'http://kfinteriordesign.com/wp-content/uploads/2018/02/Kirsten-Floyd-Interior-Design-logo.jpg';

export default function LogoHeader() {
  return (
    <header
      id="logoContainer"
    >
      <img
        id="logoHeader"
        src={src}
        alt="nope"
      />
    </header>
  )
}
