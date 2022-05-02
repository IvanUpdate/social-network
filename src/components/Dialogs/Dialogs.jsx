import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {

    return (
        <main className={styles.dialogs}>
            <span className={styles.title}>Dialogs</span>
            <div className={styles.content}>
                <section className={styles.users}>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={"/dialogs/1"}>Ivan</NavLink>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={"/dialogs/2"}>Ilya</NavLink>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={"/dialogs/3"}>Timofey</NavLink>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={"/dialogs/4"}>Inna</NavLink>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user} to={"/dialogs/5"}>Anna</NavLink>
                    <NavLink className={({isActive})=>isActive ? styles.user_active : styles.user}to={"/dialogs/6"}>Marta</NavLink>
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
