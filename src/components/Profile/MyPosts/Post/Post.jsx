import React from 'react';
import styles from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={styles.item}>
            <div>
                <img className={styles.image} alt="avatar" src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg'/>
            </div>
            <section className={styles.post}>
            <div className={styles.message}>{ props.message }</div>
            <span className={styles.like}>{props.likes} Likes</span>
            </section>
        </div>
    );

}
