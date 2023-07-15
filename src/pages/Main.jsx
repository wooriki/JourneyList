import React from "react";
import List from "./List";
import Form from "./Form";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Form />
            <Link to="/list">
                <div>리스트 보기</div>
            </Link>
        </>
    );
};

export default Main;
