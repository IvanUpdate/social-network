import React from 'react';
import styled from 'styled-components';
import {colors} from "../../ui/Colors/colors";

export const Button = ({text, size, onClick}) => {

    const Button = styled.button`
      background: ${colors.seaLazur};
      border-radius: 40px;
      border: none;
      color: ${colors.black};
      font-family: 'Quicksand', sans-serif;
      font-size: 20px;
      padding: 5px 10px;
      margin: 10px;
      width: ${size}px;
      height: 60px;
    `;

    return (
        <Button type="text" onClick={onClick}>{text}</Button>
    );
}
