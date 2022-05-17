import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem} from "./Dialog-item/Dialog-item";
import {Message} from "./Message/Message";
import {Inputarea} from "../ui/ui-kit/Inputarea";
import {Button} from "../ui/ui-kit/Button";

export const Dialogs = ({state}) => {

    const {dialogs, messages} = state;

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
    };

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
                    <Inputarea ref={newPostElement}></Inputarea>
                    <Button onClick={addPost} text="Add Message" size={160}/>
                </section>
            </div>
        </main>
    );
}
