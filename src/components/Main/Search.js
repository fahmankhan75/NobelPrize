import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  searchTitle:{
    fontSize: 30,
    textDecoration: 'underline',
    marginTop: 200,
    textAlign: 'center'
  },
  yearTextComp:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 30,
    marginTop: 20,
    "& .MuiFormHelperText-root":{
      fontSize: 25
    }
  },
  yearInput:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiInputBase-input": {
      fontSize: 30,
      textAlign: 'center'
    }
  },
  formControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    "& .MuiInputLabel-formControl":{
      position: 'relative',
      fontSize: 30
    },
    "& .MuiSelect-select":{
      width: 350,
      textAlign: 'center',
      fontSize: 30
    },
    "& .MuiInput-underline:after":{
      borderBottom: 'black'
    }
  },
  formButton:{
    justifyContent: "center",
    "& .MuiButton-label":{
      fontSize: 20,
      color: 'green'
    }
  }

}));

export default function TextFieldSizes() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('All');


  const handleChange = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <div>
      <h3 className={classes.searchTitle}>Search Nobel Prize Info</h3>
      <TextField
          defaultValue="2019"
          helperText="Select Year"
          className={classes.yearTextComp}
          variant='outlined'
          InputProps={{
            className: classes.yearInput,
        }}
        ></TextField>
      <br></br>
    <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}>
        <MenuItem value={'All'}>All</MenuItem>
        <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
        <MenuItem value={'Economics'}>Economics</MenuItem>
        <MenuItem value={'Literature'}>Literature</MenuItem>
        <MenuItem value={'Medicine'}>Medicine</MenuItem>
        <MenuItem value={'Peace'}>Peace</MenuItem>
        <MenuItem value={'Physics'}>Physics</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <br></br>
        <Button
          variant="outlined"
          endIcon={<SearchIcon>Search</SearchIcon>}
          className={classes.formButton}
          InputProps={{
            className: classes.formButton
        }}>
        Search
      </Button>
    </FormControl>

    </div>
  );
}