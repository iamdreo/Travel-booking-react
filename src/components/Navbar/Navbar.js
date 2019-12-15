import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Nigerianflag from '../../assets/nigerianflag.png';

//Navbar style css

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: 'black',
    paddingLeft: '20%'
  },
  button: {
    marginRight: '5%'
  },
  flagButton: {
    marginRight: '20%',
    height: 12,
    width: 15
  },
  responsiveTitle: {
    color: 'black'
  },
  responsiveButton: {
    marginLeft: '13rem'
  }
}));

/**
 * @param {Navbar} - takes in no argument
 * uses useMediaQuery hook from material ui to detect device size 
 * @returns Navbar styling for homepage and detail pages
 */

export default function Navbar() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const title = matches ? classes.title : classes.responsiveTitle
  const button = matches ? classes.button : classes.responsiveButton

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'white' }}>
        <Toolbar>

          <Typography variant="h6" className={title}>
            Travel
          </Typography>
          <Button className={button} >₦NGN</Button>
          <img className={classes.flagButton} src={Nigerianflag} alt="nigerian flag" />
        </Toolbar>
      </AppBar>
    </div>
  );
}