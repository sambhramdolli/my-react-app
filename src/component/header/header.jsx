import React from 'react'
import './header.css'

import logo from '../assets/logo.svg'

import Nav from './nav/nav';

function Header ()  {
    return (
    <>
    <header>
        <div className='header'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='headerSearch'>
            <div className='search'>
                <input type='text' placeholder='Search for Products...'/>
            </div>
            </div>
            <div className='nav-login-cart'>
                <button>Login</button>
                <button>Cart</button>
            </div>
        </div>
    </header>
    <Nav/>
    </>
      
    );
}

export default Header