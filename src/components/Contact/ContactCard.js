import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {contactEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}