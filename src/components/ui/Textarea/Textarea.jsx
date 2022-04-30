import React from 'react';
import styled from 'styled-components';

export const Textarea = () => {

    const StyledArea = styled.textarea`
      background-color: #99FFCD;
      border-radius: 10px;
      border: none;
      padding: 1em;
      font-family: 'Quicksand', sans-serif;
      font-size: 16px;
      color: #5f62ff;
    `

    return (
        <StyledArea></StyledArea>
    );
}
