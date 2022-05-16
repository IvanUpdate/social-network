import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem} from "./Dialog-item/Dialog-item";
import {Message} from "./Message/Message";

export const Dialogs = ({state}) => {

    const {dialogs, messages} = state;

    return (
        <main className={styles.dialogs}>
            <span className={styles.title}>Dialogs</span>
            <div className={styles.content}>
                <section className={styles.users}>
                    {dialogs.map(dialog => {
                        return(
                            <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
                        )
                    })}
                </section>
                <section className={styles.messages}>
                    {messages.map(message => {
                        return(
                            <Message message={message.message} key={message.id} />
                        )
                    })}
                </section>
            </div>
        </main>
    );
}
