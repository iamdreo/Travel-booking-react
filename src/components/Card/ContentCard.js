import React from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import LoadingCard from './LoadingCard';
import Test from '../../assets/test.jpg'
import { Link } from 'react-router-dom'
import { Planet } from 'react-kawaii'
import Box from '@material-ui/core/Box';


//use styles is used to provide page styling with material ui theme
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: 850,
    height: 250,
    marginLeft: '20px',
    marginTop: '40px',
  },
  responsiveCard: {
    display: 'flex',
    width: 330,
    height: 200,
    marginLeft: '20px',
    marginTop: '50px',
    pointer: 'cursor',

  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  responsiveDetails: {
    display: 'flex',
    flexDirection: 'row',

  },
  content: {
    flex: '1 0 auto',

  },
  media: {
    width: 300,
  },
  responsiveMedia: {
    width: 200,
  },

  loadDeal: {
    marginTop: '23%',
    marginLeft: '190px',

  },
  responsiveLoadDeal: {
    marginTop: '10rem',

  },
  price: {
    position: 'absolute',
    marginTop: '6%',
    textAlign: 'center',
    marginLeft: '680px'

  },
  responsivePrice: {
    marginTop: '10rem',


  },
  list: {
    marginTop: 20
  }
}));

/**
 * 
 * @param {*} props content card takes in prop parameter
 * uses useMediaQuery hook from material ui to provide responsive styling
 * fetches data from firestore with search location as parameter
 * search parameter will be adjusted in the future to include other things
 * @returns card styling for 'isempty', 'isloaded' and when it has a match for search parameter
 */

const ContentCard = (props) => {


  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const card = matches ? classes.card : classes.responsiveCard
  const details = matches ? classes.details : classes.responsiveDetails
  const price = matches ? classes.price : classes.responsivePrice
  const loaddeal = matches ? classes.loadDeal : classes.responsiveLoadDeal
  const image = matches ? classes.media : classes.responsiveMedia

  const search = useSelector(state => state.search.items)
  useFirestoreConnect([
    {
      collection: 'todos', where: [
        ['title', '==', search.location]
      ]
    }
  ])
  const todos = useSelector(state => state.firestore.ordered.todos)



  if (!isLoaded(todos)) {
    return (
      <LoadingCard />
    )
  }
  if (isEmpty(todos)) {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '18%' }}>
      <Planet size={220} mood="sad" color="#FCCB7E" />
      <h4 style={{ marginTop: 20, textAlign: 'center' }}>No packages available for the location you selected, please contact us
    to create custom package</h4></div>
  }

  return (
    todos.map(todo =>

      <Card className={card} key={todo.id} component={Link} to={'/details/' + todo.id}>
        <CardMedia
          className={image}
          image={Test}
          title="Live from space album cover"
        />
        <div className={details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              Travel deal to london
          </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.list}>

              <li>{todo.title}</li>
              <li>7 tours</li>

            </Typography>
          </CardContent>

        </div>
        <div className={price}>
          <Typography component="h6" variant="h6">
            <Box fontStyle="italic" m={1}>
              ₦400,000
          </Box>
          </Typography>
        </div>
        <Hidden mdDown>
          <div className={loaddeal}>
            <Button variant="contained" color="primary" component={Link} to={'/details/' + todo.id}>
              View Deal
      </Button>
          </div>
        </Hidden>

      </Card>


    )
  )

}

export default ContentCard;