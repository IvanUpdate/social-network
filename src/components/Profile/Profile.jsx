import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import styled from "styled-components";
import {ProfileInfo} from "./Profile-info/Profile-info";


const ProfileDiv= styled.div`
    background-color: #f78104;
    border-radius: 40px;
    margin-top: 10px;
`;


const Profile = ({state, dispatch}) => {
    return (
        <div className={styles.main}>
            <ProfileInfo />
            <ProfileDiv>
                <MyPosts posts={state.posts} dispatch={dispatch}/>
            </ProfileDiv>
        </div>
    );
};

export default Profile;
