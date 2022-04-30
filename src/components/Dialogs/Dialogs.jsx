import React from 'react';
import styles from './Dialogs.module.css';

export const Dialogs = (props) => {

    return (
        <main className={styles.dialogs}>
            <span className={styles.title}>Dialogs</span>
            <div className={styles.content}>
            <section className={styles.users}>
                <span className={styles.user}>Ivan</span>
                <span className={styles.user}>Ilya</span>
                <span className={styles.user}>Timofey</span>
                <span className={styles.user}>Inna</span>
                <span className={styles.user}>Anna</span>
                <span className={styles.user}>Marta</span>
            </section>
                <section className={styles.messages}>
                    <span className={styles.message}>Ivan, hi!</span>
                    <span className={styles.message}>Ivan, how are you!</span>
                    <span className={styles.message}>What a wonderful day</span>
                    <span className={styles.message}>Say you</span>
                </section>
            </div>
        </main>
    );
}
