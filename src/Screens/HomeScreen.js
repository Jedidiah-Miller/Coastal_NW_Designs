import React from 'react';
import { withRouter } from 'react-router-dom';
import MainContent from '../components/Home/MainContent';
import { Helmet } from 'react-helmet';


function HomeScreen() {
  return (
    <div id="home-container">
      <MainContent />
      <Helmet>
        <title>Coastal Northwest Designs</title>
        <meta
          name="description"
          content="coastal northwest designs home page"
        />
      </Helmet>
    </div>
  )
}

export default withRouter(HomeScreen);