import React from 'react';
import { withRouter } from 'react-router-dom';
import { AboutText } from '../components/About';


function AboutScreen() {
  return (
    <div id="about-container">
      <AboutText />
    </div>
  )
}

export default withRouter(AboutScreen);