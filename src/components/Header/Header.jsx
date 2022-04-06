import React from "react";
import headerStyles from './Header.module.css';

const Header = () => {
    return (
        <header className={headerStyles.header} >
            <img src="https://images.unsplash.com/photo-1632207191677-8446985f9d65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1461&q=80"></ img>
        </header>
    )
};

export default Header;