import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import cardPhoto from '../../assets/Contact/dPass.jpg'
import Typography from '@material-ui/core/Typography';
import { contactEmail } from './ContactData';


const useStyles = makeStyles({
  card: {
    margin: 'auto',
    marginTop: '12vh',
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundColor: 'rgb(139, 0, 139)'
  },
});


export default function ContactCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardPhoto}
        />
          <Typography gutterBottom variant="h5" component="h2">
            Contact
          </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            email: {contactEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}