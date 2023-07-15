import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Main = () => {
    return (
        <>
            <Form />
            <Link to="/list" style={{ textDecoration: "none" }}>
                <Goto>Go to Check-List</Goto>
            </Link>
        </>
    );
};

export default Main;

const Goto = styled.p`
    width: 40%;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: bold;
    color: #7db3b0;
    text-align: right;
`;
