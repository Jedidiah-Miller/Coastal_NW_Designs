import React from 'react';
import { withRouter } from 'react-router-dom';
import { MailtoButton, ContactCard } from '../components/Contact';
import { Helmet } from 'react-helmet';


function ContactScreen() {
  return (
    <div id="contact-container">
      <ContactCard />
      <h2 style={styles.h2}>or</h2>
      <MailtoButton />
      <Helmet>
        <title>contact us</title>
        <meta
          name="description"
          content="coastal northwest designs contact page"
        />
      </Helmet>
    </div>
  )
}

export default withRouter(ContactScreen);

const styles = {
  h2: {
    fontWeight: 300
  }
}