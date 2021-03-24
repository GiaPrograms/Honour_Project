import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./TranslateButton.css"

let lang = localStorage.getItem("language")

if (lang == null) {
    localStorage.setItem("language", "English")
}

console.log(lang)

const TranslateButton = () => {
    const [status, setStatus] = useState(lang)

    const handleClickEN = () => {
        localStorage.setItem("language", "English")
        setStatus('English')
        window.location.reload()
    }

    const handleClickFR = () => {
        localStorage.setItem("language", "French")
        setStatus('French')
        window.location.reload()
    }

    return (
        <div className='translate-btn'>
            <div className="translate-btn-container">
                {status === 'English'  && <Button className="translate-btn-english" onClick={handleClickFR}>EN</Button>}
                {status === 'French' && <Button className="translate-btn-french" onClick={handleClickEN}>FR</Button>}
            </div>
        </div>
    );
}

export default TranslateButton