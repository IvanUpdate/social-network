import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./DialogItem.module.css";

export const DialogItem = ({id, name}) => {
    return (
        <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={`/dialogs/${id}`}>{name}</NavLink>
    );
}
