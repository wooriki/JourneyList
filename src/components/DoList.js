import React from "react";
import { useQuery } from "react-query";
import { bringTodos } from "../axios/api";
import { Link } from "react-router-dom";

function DoList() {
    const {
        isLoading,
        isError,
        data: todos = [],
    } = useQuery("todos", bringTodos);

    if (isLoading) {
        return <h1>현재 로딩중입니다.</h1>;
    }
    if (isError) {
        return <h1>현재 오류가 발생했습니다.</h1>;
    }

    //////////////////////////////////////////////////////////////

    return (
        <div>
            {todos?.map((todos) => (
                <div key={todos.id}>
                    <Link to={`/DoList/${todos.id}`}>
                        <div>{todos.title}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default DoList;
