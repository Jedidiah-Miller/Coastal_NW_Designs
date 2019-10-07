import React from 'react';
import { withRouter } from 'react-router-dom';
import MainContent from '../components/Home/MainContent';

function HomeScreen() {
  return (
    <div>
      <MainContent />
    </div>
  )
}

export default withRouter(HomeScreen);