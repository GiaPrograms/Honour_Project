
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};


const RadioButtons = ({setValue, minLabel, maxLabel, reversed, value, sliderId, forSlider}) => {
  console.log('value', value)
  // console.log('setValue ****************************', setValue)
  const [number, setNumber] = useState('');

  const handleChange = (event, number) => {
    setNumber(number);
    
    // if(setValue !== "disabled") setValue(number, sliderId)
    console.log('slected', number)
    if(setValue !== "disabled") setValue(number, sliderId, forSlider)
  };

  useEffect(() => {
    setNumber(value.toString())
  }, [value])


  return (
    <div className="circle-group-container">
      <div className="circle-radio-group">
        <p style={{color: reversed ? '#4DAA33' : '#B10921'}}>{minLabel}</p>
        <p style={{color: reversed ? '#B10921' : '#4DAA33'}}>{maxLabel}</p>
      </div>
      <RadioGroup row aria-label="type" value={number} onChange={handleChange}>
        <FormControlLabel
          className="radio-space"
          value="0" 
          defaultValue="true"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="0"
          icon={<RadioButtonUncheckedIcon fontSize="small" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        />

        <FormControlLabel
          className="radio-space"
          value="1"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="1"
        />

        <FormControlLabel
          className="radio-space"
          value="2"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="2"
        />

        <FormControlLabel
          className="radio-space"
          value="3"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="3"

        />

        <FormControlLabel
          className="radio-space"
          value="4"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="4"

        />

        <FormControlLabel
          className="radio-space"
          value="5"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="5"
        />
      </RadioGroup>
    </div>
  );
}

export default withStyles(styles)(RadioButtons);