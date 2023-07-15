import React from "react";
import { useQuery } from "react-query";
import { checkTodos } from "../axios/api";
import { Link } from "react-router-dom";

const List = () => {
    // Playlist 조회
    const { isLoading, isError, data: todos } = useQuery("todos", checkTodos);

    // Playlist 조회
    if (isLoading) {
        return <h1>현재 로딩중입니다..</h1>;
    }
    if (isError) {
        return <h1>현재 오류가 발생했습니다..</h1>;
    }
    return (
        <div>
            {todos?.map((todo) => (
                <div key={todo.id}>
                    <Link to={`/list/${todo.id}`}>
                        <div>
                            {todo.title} / {todo.writer}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default List;
