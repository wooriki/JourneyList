import React, { useState } from "react";
import { useRef, useEffect } from "react";
import shortid from "shortid";
import { useMutation, useQueryClient } from "react-query";
import { addTodos } from "../axios/api";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Btn from "../components/Btn";

const Form = () => {
    // 입력값
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onChangeWriter = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 3) {
            setWriter(inputValue.substring(0, 3)); // 성함을 3글자까지만 유지
        } else {
            setWriter(inputValue);
        }
    };
    const onChangeTitle = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 12) {
            setTitle(inputValue.substring(0, 12)); // 제목을 12글자까지만 유지
        } else {
            setTitle(inputValue);
        }
    };
    const onChangeContents = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 40) {
            setContents(inputValue.substring(0, 40)); // 내용을 40글자까지만 유지
        } else {
            setContents(inputValue);
        }
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
        if (!writer || !title || !contents) {
            alert("모든 입력칸을 채워주세요.");
            return;
        }
        alert("기록 완료!");
        const newTodo = {
            id: shortid(),
            writer,
            title,
            contents,
            // password,
        };
        await addMutation.mutateAsync(newTodo);
        queryClient.invalidateQueries("todos");
        // 입력값 초기화
        navigate("List");
    };
    // autoCursor
    const inputRef = useRef(null); // useRef로 ref 생성

    useEffect(() => {
        inputRef.current.focus(); // 컴포넌트가 마운트되면 자동으로 input에 포커스
    }, []);
    // 추가에 성공하면 바로 List 페이지로 이동하기
    // 모든 입력값 입력하지 않으면 버튼 비활성화

    return (
        <InputTag>
            <div>
                <SubText>여행에 필요한 Check-List를 작성해 보세요!</SubText>
                <div>
                    <Label>Writer </Label>
                    <InputAreaWriter
                        ref={inputRef}
                        value={writer}
                        onChange={onChangeWriter}
                        placeholder="성함을 입력해주세요.(3자 이내)"
                    />
                </div>
                <div>
                    <Label>Item </Label>
                    <InputArea
                        value={title}
                        onChange={onChangeTitle}
                        placeholder="필요 항목을 입력해주세요.(12자 이내)"
                    />
                </div>
                <TATag>
                    <LabelM>Memo </LabelM>
                    <TextArea
                        value={contents}
                        onChange={onChangeContents}
                        placeholder="추가적인 메모를 해주세요.(40자 이내)"
                    />
                </TATag>
                <CustomBtn
                    onClick={addButtonHandler}
                    style={{ float: "right" }}
                >
                    추가하기
                </CustomBtn>
            </div>
        </InputTag>
    );
};

export default Form;

const SubText = styled.p`
    color: #6e6d6d;
    text-align: center;
    font-size: 1rem;
    margin-top: 16px;
`;
const Label = styled.label`
    font-weight: bold;
    color: #5e5e5e;
`;
const LabelM = styled.label`
    font-weight: bold;
    color: #5e5e5e;
    margin-top: 8px;
`;
const InputTag = styled.div`
    width: 40%;
    background-color: #d6d6d6;
    border-radius: 10px;
    margin: 0 auto;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 10px lightgray;
`;
const InputAreaWriter = styled.input`
    width: 220px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 6px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
const InputArea = styled.input`
    width: 220px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 16px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;

const TATag = styled.div`
    display: flex;
    align-item: center;
`;
const TextArea = styled.textarea`
    width: 220px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 10px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;

const CustomBtn = styled(Btn)`
    float: right;
`;
