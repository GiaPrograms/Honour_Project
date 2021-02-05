import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./SaveButton.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SaveButton = ({saveHandler, saveStatus}) => {
  const classes = useStyles();
  const [status, setStatus] = useState('default')

  const handleClick = () => {
    setStatus('saving')
    saveHandler()
  }

  useEffect(() => {
    setStatus(saveStatus)
  },[saveStatus])

  return (
    <div className={classes.root}>
      <div className="save-btn-container">
        {(status === 'default' || status === 'failed') && <Button className="save-btn" onClick={handleClick}>Save</Button>}
        {status === 'saving' && <Button disabled className="save-btn disabled">Saving</Button>}
        {status === 'success' && <Button disabled className="save-btn success">Saved</Button>}
      </div>
    </div>
  );
}

export default SaveButton