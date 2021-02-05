/**
 * @file
 * Purpose dialog component
 * Displays the dialog on the home page once the user logs in and handles storing their selection
 * @author <akel.ms93@gmail.com>
 */

import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import {updateLogPurpose} from "../HandleUserLog"

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    // margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 300,
    width: 330
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const PurposeDialog = () => {
  const classes = useStyles();
  const [purpose, setPurpose] = useState('')
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem('purpose', true)
    savePurpose()
  }

  const handleChange = ev => {
    setPurpose(ev.target.value);
  }

  const savePurpose = async() => {
    updateLogPurpose(purpose)
  }

  return (
    <div>
      <React.Fragment>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login Purpose"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select your login purpose
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="purpose">Purpose</InputLabel>
              <Select
                autoFocus
                value={purpose}
                onChange={handleChange}
                inputProps={{
                  name: 'purpose',
                  id: 'purpose',
                }}
              >
                <MenuItem value="First time user">First time user</MenuItem>
                <MenuItem value="Review information">Review information</MenuItem>
                <MenuItem value="Change my answers">Change my answers</MenuItem>
                <MenuItem value="Change my plan">Change my plan</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          {purpose 
            ? <Button onClick={handleClose} color="primary">
                CONFIRM
              </Button>
            : <Button disabled>
                CONFIRM
              </Button>
          } 
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  )
}

export default PurposeDialog