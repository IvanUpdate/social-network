import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Heebo', sans-serif;
  font-size: 20px;
  padding: 5px 10px;
  margin 10px;
  `;

const AddPostButton = styled(Button)`
    background:  
`;


export const MyPosts = () => {
    return (
    <div>
        My Posts
        <div>
            New Post
        </div>
        <textarea></textarea>
        <Button>Add Post</Button>
        <Button>Remove Post</Button>
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>);
};