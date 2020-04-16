import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

const Header = () => (
    <div className="header">
        <Link to="/daraz-collection" className="logo-container" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/daraz-collection/shop" className="option" > SHOP </Link>
            <Link to="/daraz-collection/shop" className="option">CONTACT </Link>
            <Link to="/daraz-collection/sign-in" className="option">SIGNIN</Link>
        </div>
    </div>
)


export default Header;