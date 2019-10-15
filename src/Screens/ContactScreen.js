import React from 'react';
import { withRouter } from 'react-router-dom';
import { MailtoButton, ContactCard, ContactPaper } from '../components/Contact';


function ContactScreen() {
  return (
    <div id="contact-container">
      <ContactCard />
      {/* <ContactPaper /> */}
      <h2 style={styles.h2}>or</h2>
      <MailtoButton />
    </div>
  )
}

export default withRouter(ContactScreen);

const styles = {
  h2: {
    fontWeight: 300
  }
}