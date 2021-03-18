import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./TranslateButtonEN.css"

const TranslateButtonEN = () => {

    const handleClick = () => {
        localStorage.setItem("language", "English")
        window.location.reload()
    }

    return (
        <div className='translate-btn'>
            <div className="translate-btn-container">
                <Button className="translate-btn-en" onClick={handleClick}>EN</Button>
            </div>
        </div>
    );
}

export default TranslateButtonEN