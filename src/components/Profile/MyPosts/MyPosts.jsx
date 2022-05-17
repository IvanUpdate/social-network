import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Inputarea} from "../../ui/ui-kit/Inputarea";
import {Button} from "../../ui/ui-kit/Button";


export const MyPosts = ({posts}) => {

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
    };

    return (
    <div className={styles.post_area}>
        <h3>My Posts</h3>
        <Inputarea ref={newPostElement}></Inputarea>
        <Button onClick={addPost} text="Add Post" size={140}/>
        <div>
            {posts.map(post => {
                return(
                    <Post key={post.id} message={post.message} likes={post.likes}/>
                )
            })}
        </div>
    </div>);
};
