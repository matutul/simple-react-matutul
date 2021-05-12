import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header" style={{position: 'sticky', top: '-110px'}}>
            <img className="logo" src={logo} alt="" />
            <nav className="nav-bar">
                <a href="/team">Team</a>
                <a href="/players">Players</a>
                <a href="/about">About</a>
                <a id="contact" href="/contact">Contact  <FontAwesomeIcon icon={faMobileAlt} /></a>
            </nav>
        </div>
    );
};

export default Header;