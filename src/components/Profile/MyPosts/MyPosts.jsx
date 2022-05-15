import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Textarea} from "../../ui/Textarea/Textarea";
import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Heebo', sans-serif;
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px;
  `;


export const MyPosts = ({posts}) => {

    return (
    <div className={styles.post_area}>
        <h3>My Posts</h3>
        <Textarea></Textarea>
        <Button>Add Post</Button>
        <Button>Remove Post</Button>
        <div>
            {posts.map(post => {
                return(
                    <Post key={post.id} message={post.message} likes={post.likes}/>
                )
            })}
        </div>
    </div>);
};
