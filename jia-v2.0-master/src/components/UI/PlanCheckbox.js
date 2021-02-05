import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const PlanCheckbox = ({toggleCheckbox, isChecked}) => {
  const handleChange = ev => {
    toggleCheckbox(ev.target.checked)
  }

  return(
    <Tooltip title={isChecked ? "Remove from plan" : "Add to plan"}>
      <span className="checkbox-container">
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          color="primary"
        />
      </span>
    </Tooltip>
  )
}

export default PlanCheckbox