import React from 'react';
import { contactEmail, emailSubject } from './ContactData';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Mail } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none'
  },
  fab: {
    margin: theme.spacing(1),
    color: 'white'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function MailtoButton() {

  const classes = useStyles();

  return (
    <a
      href={`mailto:${contactEmail}?Subject=${emailSubject}`}
      target="_top"
      className={classes.link}
    >
      <Fab color="primary" variant="extended" aria-label="delete" className={classes.fab}>
        <Mail className={classes.extendedIcon} />
        write us an email
      </Fab>
    </a>
  )
}
