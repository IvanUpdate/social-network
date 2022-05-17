import React from 'react';
import styles from './Post.module.css';
import {avatar_image} from "../../../../services/constants";

export const Post = (props) => {
    return (
        <div className={styles.item}>
            <div>
                <img className={styles.image} alt="avatar" src={avatar_image}/>
            </div>
            <section className={styles.post}>
            <div className={styles.message}>{ props.message }</div>
            <span className={styles.like}>{props.likes} Likes</span>
            </section>
        </div>
    );

}
