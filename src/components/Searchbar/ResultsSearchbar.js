import 'date-fns';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { searchPackage } from '../../store/actions/searchActions'
import './Searchbar.css'

const useStyles = makeStyles(theme => ({

  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 700,
    height: 30,
    position: 'absolute',
    top: 20,
    left: '20%'

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 3,
    fontSize: '1rem',

  },
  input1: {
    marginLeft: theme.spacing(1),
    flex: 2,
    fontSize: '1rem',

  },
  input2: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '1rem',

  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 20,
    margin: '2px 4px',
  },
}));

/**
 * @params {ResultsSearchbar} - takes no params 
 * @returns search bar for the results page styling 
 */

export default function ResultsSearchbar() {
  const search = useSelector(state => state.search.items)
  const dispatch = useDispatch()
  const classes = useStyles();
  const [state, setState] = useState({
    location: search.location,
    date: search.date,
    persons: search.persons
  })

  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPackage(state))
  }

  return (
    <div className="searchbar">
      <Paper component="form" className={classes.root} elevation={0} onSubmit={handleSubmit}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <LocationOnIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Where?"
          inputProps={{ 'aria-label': 'Where to go' }}
          name="location"
          value={state.location}
          onChange={handleChange}


        />

        <Divider className={classes.divider} orientation="vertical" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            InputAdornmentProps={{ position: "start" }}
            id="date"
            value={state.date}
            placeholder="When?"
            onChange={(date) => setState({ ...state, date: date })}
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
          placeholder="2" inputProps={{ 'aria-label': 'how many?' }}
          name="persons"
          value={state.persons}
          onChange={handleChange}
        />

        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}