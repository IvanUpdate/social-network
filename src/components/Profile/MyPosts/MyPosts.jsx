import React, {useState} from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {StyledArea} from "../../ui/ui-kit/Inputarea";
import {Button} from "../../ui/ui-kit/Button";


export const MyPosts = ({posts, dispatch}) => {

    const [post, setPost] = useState("");

    const clickButton = (text) => {
        dispatch({
            type: 'ADD_POST',
            message: text
        });
        setPost("");
    };

    const onChangeValue = (e) => {
        setPost(e.target.value);
    }

    // переделать согласно архитектуре FLUX

    return (
    <div className={styles.post_area}>
        <h3>My Posts</h3>
        <StyledArea onChange={onChangeValue} value={post} ></StyledArea>
        <Button onClick={() => clickButton(post)} text="Add Post" size={140}/>
        <div>
            {posts.map(post => {
                return(
                    <Post key={post.id} message={post.message} likes={post.likes}/>
                )
            })}
        </div>
    </div>);
};
