import React from 'react';
import { contactEmail, subject } from '../ContactData';
import './styles.css';


export default function MailtoButton() {
  return (
    <div id="mailto-btn">
      <a href={`mailto:${contactEmail}?Subject=${subject}`} target="_top">
        write us an email
      </a>
    </div>
  )
}
