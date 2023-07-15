import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
    return (
        <>
            <BodyTag>
                <Header />
                <Outlet />
                {/* <div>Footer</div> */}
            </BodyTag>
        </>
    );
};

export default Layout;

const BodyTag = styled.div`
    width: 1200px;
    padding-top: 40px;
    margin: 0 auto;
`;
