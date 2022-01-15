import React from "react";
import navbarStyles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <div className={navbarStyles.item}><a>Profile</a></div>
            <div className={navbarStyles.item}><a>Messages</a></div>
            <div className={navbarStyles.item}><a>News</a></div>
            <div className={navbarStyles.item}><a>Music</a></div>
            <div className={navbarStyles.item}><a>Settings</a></div>
        </nav>
    );
};

export default Navbar;