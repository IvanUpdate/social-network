import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header} >
            <div className={styles.title}>Be a part of <span className={styles.logo}>Social</span></div>
        </header>
    )
};

export default Header;