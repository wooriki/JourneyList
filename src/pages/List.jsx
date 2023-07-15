import React from "react";
import { useQuery } from "react-query";
import { checkTodos } from "../axios/api";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
        <Body>
            {todos?.map((todo) => (
                <div key={todo.id}>
                    <Link
                        to={`/list/${todo.id}`}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <TextTag>
                            {todo.title} <Span>Write by {todo.writer}</Span>
                        </TextTag>
                    </Link>
                </div>
            ))}
        </Body>
    );
};

export default List;

const Body = styled.div`
    width: 40%;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #7db3b0;
    text-align: center;
`;
const TextTag = styled.div`
    background-color: #d6d6d6;
    color: #5e5e5e;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 6px 6px 14px lightgray;
    &: hover {
        background-color: #8dc4c2;
        color: white;
    }
`;
const Span = styled.span`
    color: #808080;
    font-size: 12px;
`;
