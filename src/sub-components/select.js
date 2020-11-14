import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      
      
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="place-native-required">City</InputLabel>
        <Select
          native
          value={state.place}
          onChange={handleChange}
          name="place"
          inputProps={{
            id: 'place-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Punjab">Punjab</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
        </Select>
        
      </FormControl>
      
      
    </div>
  );
}