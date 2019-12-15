import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import ResultsSearchbar from '../Searchbar/ResultsSearchbar'
import Nigerianflag from '../../assets/nigerianflag.png';


//styling for results page 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },

  title: {
    flexGrow: 1,
    color: 'black',
    textTransform: 'uppercase',
    paddingLeft: '5%'
  },
  button: {
    marginRight: '5%'
  },
  flagButton: {
    marginRight: '5%',
    height: 12,
    width: 15

  },
  searchbar: {
    marginBottom: '50px'
  },
  responsiveTitle: {
    color: 'black'
  },
  responsiveButton: {
    marginLeft: '13rem'
  },
}));

/**
 * @params - takes in no function as argument 
 * useMediaQuery hook from material ui to detect page size 
 * @returns navbar component for results page 
 */

export default function ResultsNavbar() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const title = matches ? classes.title : classes.responsiveTitle
  const button = matches ? classes.button : classes.responsiveButton

  return (
    <div className={classes.root}>,
      <AppBar position="fixed" style={{ background: 'white' }}>
        <Toolbar>

          <Typography variant="h6" className={title}>
            Travel
          </Typography>
          <Hidden mdDown>
            <ResultsSearchbar className={classes.searchbar} />
          </Hidden>
          <Button className={button} >₦NGN</Button>
          <img className={classes.flagButton} src={Nigerianflag} alt="nigerian flag" />
        </Toolbar>
      </AppBar>
    </div>
  );
}