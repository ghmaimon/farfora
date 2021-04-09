import React from 'react';
import { Link } from 'react-router-dom'
import {CURRENT_YEAR} from '../../../config'

const Footer = () => {
    return (<div className='footer'>
        <div className = "footer__logo">
            <Link to="/">
                <img src="/images/logos/logo.png" alt="Logo"></img>
            </Link>
        </div>
        <div className="footer__right">
            @FARFORA {CURRENT_YEAR} ALL RIGHT RESERVER.
        </div>
    </div>)
}

export default Footer;