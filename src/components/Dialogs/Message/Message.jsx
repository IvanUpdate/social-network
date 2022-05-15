import React from 'react';
import styles from './Message.module.css';


export const Message = ({message}) => {
    return (<span className={styles.message}>{message}</span>);
}
