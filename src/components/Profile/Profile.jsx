import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import styled from "styled-components";
import {ProfileInfo} from "./Profile-info/Profile-info";


const ProfileDiv= styled.div`
    background-color: #FFD36E;
    border-radius: 40px;
    margin-top: 10px;
`;


const Profile = ({state}) => {
    return (
        <div className={styles.main}>
            <ProfileInfo />
            <ProfileDiv>
                <MyPosts posts={state.posts}/>
            </ProfileDiv>
        </div>
    );
};

export default Profile;
