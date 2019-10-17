import React from 'react';
import { withRouter } from 'react-router-dom';
import { AboutText } from '../components/About';
import { Helmet } from 'react-helmet';
import { par1 } from '../components/About/AboutData';


function AboutScreen() {
  return (
    <div id="about-container">
      <AboutText />
      <Helmet>
        <title>about us</title>
        <meta
          name="description"
          content={par1.slice(0, 165)}
        />
      </Helmet>
    </div>
  )
}

export default withRouter(AboutScreen);