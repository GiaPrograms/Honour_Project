import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./TranslateButtonFR.css"

const TranslateButtonFR = () => {

    const handleClick = () => {
        localStorage.setItem("language", "French")
        window.location.reload()
    }

    return (
        <div className='translate-btn'>
            <div className="translate-btn-container">
                <Button className="translate-btn-fr" onClick={handleClick}>FR</Button>
            </div>
        </div>
    );
}

export default TranslateButtonFR