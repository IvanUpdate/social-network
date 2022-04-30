import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header} >
            <div className={styles.title}>Be a part of <NavLink to={'/'} className={styles.logo}>Social</NavLink></div>
        </header>
    )
};

export default Header;
