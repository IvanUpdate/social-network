import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import styled from "styled-components";
import {main_image} from "../../services/constants";


const ProfileDiv= styled.div`
    background-color: #FFD36E;
    border-radius: 40px;
    margin-top: 10px;
`;

const Image = styled.img`
    border-radius: 40px;
    width: 100%;
    height: 60vh;
`;

/*const result = new Date();
const date = Date.now();
result.setDate(date.getDate() + 50);*/




const Profile = () => {
    return (
        <div>
            <Image src={main_image}/>
            <ProfileDiv>
                ava+description
                <MyPosts/>
            </ProfileDiv>
        </div>
    );
};

export default Profile;
