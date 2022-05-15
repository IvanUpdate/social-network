import React from "react";
import styles from './ProfileInfo.module.css';
import styled from "styled-components";
import {main_image} from "../../../services/constants";

const Image = styled.img`
  border-radius: 40px;
  width: 100%;
  height: 60vh;
`;

export const ProfileInfo = () => {
    return (
        <>
        <Image src={main_image} />
        <div>ava + description</div>
        </>
    );
};
