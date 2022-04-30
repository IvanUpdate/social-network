import React, {useState} from 'react';
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

// const AddPostButton = styled(Button)`
//     background:
// `;


export const MyPosts = () => {


    return (
    <div className={styles.post_area}>
        My Posts
        <div>
            New Post
        </div>
        <Textarea></Textarea>
        <Button>Add Post</Button>
        <Button>Remove Post</Button>
        <div>
            <Post message = "I am dragging tags from the dropdown list to a text-area but I want the tag's text as non-editable how I can achieve this. You can see in the GIF that the text in Text-area is editable now."/>
            <Post message = "hi"/>
            <Post message = "how are you today?"/>
            <Post/>
        </div>
    </div>);
};
