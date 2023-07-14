import React, { useState } from "react";
import shortid from "shortid";
import { useMutation, useQueryClient } from "react-query";
import { addTodos } from "../axios/api";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import DoList from "./DoList";

const Sub = () => {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");

    const inputWriter = (e) => {
        setWriter(e.target.value);
    };
    const inputTitle = (e) => {
        setTitle(e.target.value);
    };
    const inputContent = (e) => {
        setContent(e.target.value);
    };
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();
    // Todo 추가
    const queryClient = useQueryClient();
    const addMutation = useMutation(addTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
    const addOn = () => {
        // 입력값 검사
        const newTodo = {
            id: shortid(),
            writer,
            title,
            content,
            //   password,
        };
        addMutation.mutate(newTodo);
        // 입력값 초기화
        alert("작성이 완료되었습니다!");
        navigate("/DoList");
    };

    return (
        <Body>
            <TopHeader>
                <h2>반갑습니다.</h2>
                <p>당신의 여행에 필요한 CheckList를 작성해 보세요!</p>
            </TopHeader>
            <div>
                <label>작성자</label>
                <input
                    value={writer}
                    onChange={inputWriter}
                    placeholder="작성자의 성함을 입력해주세요.(3자 이내)"
                />
            </div>
            <div>
                <label>제목</label>
                <input
                    value={title}
                    onChange={inputTitle}
                    placeholder="필요 항목을 입력해주세요.(20자 이내)"
                />
            </div>
            <div>
                <label>내용</label>
                <textarea
                    value={content}
                    onChange={inputContent}
                    placeholder="위 항목에 대한 메모를 입력해주세요.(50자 이내)"
                />
            </div>
            <div>
                <label>비밀번호</label>
                <input
                    type="password"
                    value={password}
                    onChange={onChangePasswordHandler}
                    placeholder="숫자 4자리"
                />
            </div>
            <button onClick={addOn}>추가하기</button>
        </Body>
    );
};

export default Sub;

const Body = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
`;
const TopHeader = styled.div`
    // margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
