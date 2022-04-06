import React from 'react';
import styles from './Post.module.css';

export const Post = () => {
    return (
        <div className={styles.item}>
            <img src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg'/>
            <div className={styles.post}>Post</div>
            <span>Like</span>
        </div>
    );

}