import React, { useState } from "react";
import shortid from "shortid";
import { useMutation, useQueryClient } from "react-query";
import { addTodos } from "../axios/api";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Form = () => {
    // 입력값
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContents = (event) => {
        setContents(event.target.value);
    };
    const navigate = useNavigate();
    // Playlist 추가
    const queryClient = useQueryClient();
    const addMutation = useMutation(addTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
    const addButtonHandler = async () => {
        // 입력값 검사
        alert("기록 완료!");
        const newPlaylist = {
            id: shortid(),
            writer,
            title,
            contents,
            // password,
        };
        await addMutation.mutateAsync(newPlaylist);
        queryClient.invalidateQueries("todos");
        // 입력값 초기화
        navigate("List");
    };

    // 추가에 성공하면 바로 List 페이지로 이동하기
    // 모든 입력값 입력하지 않으면 버튼 비활성화

    return (
        <InputTag>
            <div>
                <div>
                    <label>Writer </label>
                    <InputAreaWriter
                        value={writer}
                        onChange={onChangeWriter}
                        placeholder="성함을 입력해주세요.(3자 이내)"
                    />
                </div>
                <div>
                    <label>Ready </label>
                    <InputArea
                        value={title}
                        onChange={onChangeTitle}
                        placeholder="필요 항목을 입력해주세요.(12자 이내)"
                    />
                </div>
                <div>
                    <label>Memo </label>
                    <TextArea
                        value={contents}
                        onChange={onChangeContents}
                        placeholder="항목에 대한 메모를 해주세요.(50자 이내)"
                    />
                </div>
                <button onClick={addButtonHandler}>추가하기</button>
            </div>
        </InputTag>
    );
};

export default Form;

const InputTag = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InputAreaWriter = styled.input`
    width: 220px;
    margin: 0 auto;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
const InputArea = styled.input`
    width: 220px;
    margin: 0 auto;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
const TextArea = styled.textarea`
    width: 220px;
    margin: 0 auto;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
