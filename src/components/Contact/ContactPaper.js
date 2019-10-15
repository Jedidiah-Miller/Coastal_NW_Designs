import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '80%'
  },
}));


export default function PaperSheet() {

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Contact
        </Typography>
        <Typography component="p">
          words
        </Typography>
      </Paper>
    </div>
  );
}