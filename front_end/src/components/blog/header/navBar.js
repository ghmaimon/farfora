import React from 'react';
import { Link } from 'react-router-dom';
var FA = require("react-fontawesome")


const Header = (props) => {

    return (<div className = "nav">
        <div className = "nav__logo">
            <Link to="/">
                <img src="/images/logos/logo.png" alt="Logo"/>
            </Link>
        </div>
        <div className = "nav__center">
            <div className = "nav__center__item">
                <Link to="/blog/posts/">
                    Posts
                </Link>
            </div>
            <div className = "nav__center__item">
                <Link to="/messages">
                    Messages
                </Link>
            </div>
        <div className = 'nav__right'>
        <div className = "nav__right__item">
            <Link to="/about">
                About <FA name ="question"/>
            </Link>
        </div>
            <div className = "nav__right__item">
            <Link to="/LogIn">
                Sign In <FA name ="sign-in"/>
            </Link>
        </div>
        </div>
        </div>
    </div>)
}

export default Header;