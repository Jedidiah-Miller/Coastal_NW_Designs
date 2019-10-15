import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import cardPhoto from '../../assets/Contact/dPass.jpg'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { contactEmail, contactPhoneNumbers } from './ContactData';


const useStyles = makeStyles({
  card: {
    margin: 'auto',
    marginTop: '12vh',
    maxWidth: 345,
    pointerEvents: 'visible'
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
        <CardContent className="card-content">
          {contactPhoneNumbers.map((n, i) =>
          <div>
            {n.name + ": " } 
            <Link href={"tel:" + n.n} key={i} type="phone">
              {n.n}
            </Link>
            <br/>
          </div>
          )}
          <span>
            {"email: "}
            <Link type="email">
              {contactEmail}
            </Link>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}