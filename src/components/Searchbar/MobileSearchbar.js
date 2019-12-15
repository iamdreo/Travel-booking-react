import 'date-fns';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import { searchPackage } from '../../store/actions/searchActions'
import { withRouter } from 'react-router';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Slide from '@material-ui/core/Slide';
import './MobileSearchbar.css'

const styles = {

  root: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%'



  },
  input: {


    fontSize: '1.2rem',

  },
  input1: {

    fontSize: '1.2rem',


  },
  input2: {

    fontSize: '1.2rem',

  },
  iconButton: {
    paddingRight: '1rem',

  },
  searchButton: {
    margin: '2rem 1rem 0 6rem',

  },
  divider: {

    width: '17rem',
    paddingLeft: '1rem',
    backgroundColor: '#A6ACAF'

  },
};


const today = new Date()
const tommorow = new Date(today)

/**
 * @returns search bar styling for mobile
 */

class MobileSearchbar extends Component {
  state = {
    location: '',
    date: tommorow.setDate(tommorow.getDate() + 1),
    persons: 0
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.searchPackage(this.state);
    this.props.history.push('/results')

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="searchbar">
          <Slide direction="right" in={true} mountOnEnter timeout={{ enter: 3000 }}>
            <Paper component="form" className={classes.root} elevation={0} onSubmit={this.handleSubmit}>
              <div>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <LocationOnIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Where?"
                  inputProps={{ 'aria-label': 'Where to go' }}
                  id='location'
                  onChange={this.handleChange}
                  required

                />

              </div>
              <Divider className={classes.divider} />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  style={{ width: '18rem', paddingTop: 10 }}
                  margin="normal"
                  id="date"
                  InputAdornmentProps={{ position: "start" }}
                  value={this.state.date}
                  placeholder="When?"
                  onChange={(date) => this.setState({ date: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>

              <div>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <PersonIcon />
                </IconButton>
                <InputBase
                  type="number"
                  className={classes.input2}
                  placeholder="2"
                  inputProps={{ 'aria-label': 'how many?' }}
                  id='persons'
                  onChange={this.handleChange}
                  required
                />

              </div >

              <Divider className={classes.divider} />


              <Button variant="contained" color="primary" type="submit" className={classes.searchButton} aria-label="search">
                Search now
      </Button>
            </Paper>
          </Slide>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchPackage: (queries) => dispatch(searchPackage(queries))
  }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(withStyles(styles)(MobileSearchbar))