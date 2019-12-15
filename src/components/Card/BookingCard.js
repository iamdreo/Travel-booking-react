
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { Rating } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';

/**
 *@function {useStyles} function provides styling for page using material ui
 @param currently takes in no parameters
 @returns booking card that will be used to book exact page and show confirmation details
 * 
 */

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  rating: {
    padding: '5% 0 0 20%',
  },
  button: {

  }
});

export default function BookingCard() {

  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total package price from <br />
          $800,000 <br />
          per person*
        </Typography>
        <Divider />

        <Rating maxRating={5} defaultRating={3} icon='star' className={classes.rating} />


      </CardContent>
      <CardActions>
        <Button type="primary" className={classes.button}>Reserve now</Button>
      </CardActions>
      <Divider />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Call to book <br />
          No Booking fees
        </Typography>



      </CardContent>
    </Card>
  );
}