import React from 'react';
import { Link } from 'react-router-dom';
import bookLogo from '../../assets/images/logo.jpg';
import classes from './Logo.css';

const logo = (prop) => (
        <Link className='cardlink' to={'/books'}><img src={bookLogo} alt="Good Read Books" /></Link>
);

export default logo;