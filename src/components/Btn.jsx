import React from "react";
import styled from "styled-components";

// 버튼 스타일 정의
const Button = styled.button`
    font-weight: bold;
    background-color: #a4a6a6;
    color: #333;
    border: none;
    margin: 10px 0 0 6px;
    float: right;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 6px 6px 14px lightgray;
    &: hover {
        background-color: #777878;
        color: white;
    }
`;

// 버튼 컴포넌트
const Btn = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
};

export default Btn;
