/**
 * @file
 * Component for step 4 Plan "6. Let's review the key facts" section
 * Contains the UI and fetches the user selection
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from "react";
import {withStyles} from '@material-ui/core/styles';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {getRequest} from "../../API/ApiHandler"

const OrangeRadio = withStyles({
  root: {
    width: 46,
    height: 46,
    '&$checked': {
      color: "#F15A2B",
    },
  },
  checked: {},
})(Radio);

const PlanReview = ({setReview, setSaved, setSaveStatus}) => {
  const [text, setText] = useState()
  const [value, setValue] = React.useState('')

  const getUserReview = async () => {
    let data = await getRequest(`/reviews/user`)
    if(data){
      let {selection} =  data
      setReview(selection)
      setValue(selection)

      selection === 'true'
       ? setText("Good answer! There are a few treatments that can help manage arthritis pain.")
       : setText("There are a few treatments that can help manage arthritis pain.")
    }
  }

  const handleChange = ev => {
    let targetValue = ev.target.value;
    switch (targetValue) {
      case "true":
        setText("Good answer! There are a few treatments that can help manage arthritis pain.")
        break;
      case "false":
        setText("There are a few treatments that can help manage arthritis pain.")
        break;
      case "don't know":
        setText("There are a few treatments that can help manage arthritis pain.")
        break;
      default:
    }
    setReview(targetValue)
    setValue(targetValue)
    setSaved(false)
    setSaveStatus('default')
  }

  useEffect(() => {
    getUserReview()
  },[])

  return (
    <div className="review_key_facts box-container-numbered">
      <h4 className="numbered-subheading">6. Let's review the key facts</h4>
      <h5>
        Studies show that some treatments
        <br />
        can help manage arthritis pain.
      </h5>
      <FormControl className="radio-group">
        <RadioGroup onChange={handleChange} className="radio-group" value={value} row>
          <FormControlLabel
            control={<OrangeRadio />}
            value="true"
            className="radio-button"
            labelPlacement="top"
            label="True"
          />
          <FormControlLabel
            control={<OrangeRadio />}
            value="false"
            className="radio-button"
            labelPlacement="top"
            label="False"
          />
          <FormControlLabel
            control={<OrangeRadio />}
            value="don't know"
            className="radio-button"
            labelPlacement="top"
            label="Don't Know"
          />
        </RadioGroup>
      </FormControl>
      <p>{text}</p>
    </div>
  );
}

export default PlanReview
