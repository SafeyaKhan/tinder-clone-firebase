import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import logo from './images/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className='header'>
                <IconButton>
                    <PersonIcon sx={{ fontSize: 40 }} className="header__icon" />
                </IconButton>

                <img src={logo} alt="header" className='header__logo' />
                <Link to="/chat">
                    <IconButton>
                        <ForumIcon sx={{ fontSize: 40 }} className="header__icon" />
                    </IconButton>
                </Link>

            </div>
        </>
    )
}

export default Header

