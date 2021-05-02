
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
    // color: green[400],
    '&$checked': {
      color: '#10434F',

    },
  },
  checked: {},
  labelPlacement:"top",
  label:"5",
  
})((props) => <Radio color="default" {...props} />);


const styles = {
  root: {
    color: '#10434F',
    '&$checked': {
      color: '#10434F',
    },
  },
  
  checked: {},
};



const RadioButtons = ({setValue, minLabel, maxLabel, reversed, value, sliderId, forSlider}) => {
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
        <h3 style={{color: reversed ? '#4DAA33' : '#B10921'}}>{minLabel}</h3>
        <h3 style={{color: reversed ? '#B10921' : '#4DAA33'}}>{maxLabel}</h3>
      </div>
      
      <RadioGroup row aria-label="type" value={number} onChange={handleChange} >
      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h4>
        {/* <FormControlLabel */}
          <GreenRadio 
          className="radio-space"
          value="0" 
          defaultValue="true"
          control={<Radio className="painLevel" />}
          labelPlacement="top"
          label="0"
          icon={<RadioButtonUncheckedIcon fontSize="medium" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="medium" />}
          style={GreenRadio.root}
          
        />
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>

        <GreenRadio
          className="radio-space"
          value="1"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="1"
          style={GreenRadio.root}
        />
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        <GreenRadio
          className="radio-space"
          value="2"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="2"
          style={GreenRadio.root}
        />
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        <GreenRadio
          className="radio-space"
          value="3"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="3"
          style={GreenRadio.root}

        />
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        <GreenRadio
          className="radio-space"
          value="4"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="4"
          style={GreenRadio.root}

        />
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        <GreenRadio
          className="radio-space"
          value="5"
          control={<Radio className="painLevel" />}
          labelPlacement="bottom"
          label="5"
          style={GreenRadio.root}
        />
      </RadioGroup>

      <h4 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2     
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   5
      </h4>
    </div>
  );
}
RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);