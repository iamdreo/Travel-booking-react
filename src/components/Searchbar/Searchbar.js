import 'date-fns';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { searchPackage } from '../../store/actions/searchActions'
import { withRouter } from 'react-router';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Slide from '@material-ui/core/Slide';
import './Searchbar.css'

const styles = {

  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '65rem',
  },
  input: {
    marginLeft: 8,
    flex: 3,
    fontSize: '1.3rem',

  },
  input1: {
    marginLeft: 8,
    flex: 2,
    fontSize: '1.3rem',

  },
  input2: {
    marginLeft: 8,
    flex: 1,
    fontSize: '1.3rem',

  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 50,
    margin: '2px 4px',
  },
};


const today = new Date()
const tommorow = new Date(today)

/**
 * @returns search bar with location, date and persons
 */

class Searchbar extends Component {
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
      <div className="searchbar">
        <Slide direction="right" in={true} mountOnEnter timeout={{ enter: 3000 }}>
          <Paper component="form" className={classes.root} elevation={3} onSubmit={this.handleSubmit}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <LocationOnIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Where to go"
              inputProps={{ 'aria-label': 'Where to go' }}
              id='location'
              onChange={this.handleChange}
              required

            />


            <Divider className={classes.divider} orientation="vertical" />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date"
                value={this.state.date}
                placeholder="When?"
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) => this.setState({ date: date })}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>

            <Divider className={classes.divider} orientation="vertical" />
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

            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Slide>
      </div>

    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    searchPackage: (queries) => dispatch(searchPackage(queries))
  }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(withStyles(styles)(Searchbar))