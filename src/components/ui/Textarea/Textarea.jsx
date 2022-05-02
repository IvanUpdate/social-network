import React from 'react';
import styled from 'styled-components';

export const Textarea = () => {

    const StyledArea = styled.textarea`
      background-color: #99FFCD;
      border-radius: 40px;
      border: none;
      padding: 10px 30px;
      font-family: 'Quicksand', sans-serif;
      font-size: 16px;
      color: #5f62ff;
      width: 30em;
      margin-left: 10px;
      min-height: 7em;
    `

    return (
        <StyledArea></StyledArea>
    );
}
