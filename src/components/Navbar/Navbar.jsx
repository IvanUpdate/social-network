import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to={"/"}  className={({isActive})=>isActive ? styles.item_active : styles.item}>Profile</NavLink>
            <NavLink to={"/dialogs"}  className={({isActive})=>isActive ? styles.item_active : styles.item}>Messages</NavLink>
            <NavLink to={"/news"}  className={({isActive})=>isActive ? styles.item_active : styles.item}>News</NavLink>
            <NavLink to={"/music"}  className={({isActive})=>isActive ? styles.item_active : styles.item}>Music</NavLink>
            <NavLink to={"/settings"}  className={({isActive})=>isActive ? styles.item_active : styles.item}>Settings</NavLink>
        </nav>
    );
};

export default Navbar;
