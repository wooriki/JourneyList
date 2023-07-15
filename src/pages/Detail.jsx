import React, { useState } from "react";
import Comments from "../components/Comments";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTodos, editTodos, getTodos } from "../axios/api";
import { styled } from "styled-components";
import Btn from "../components/Btn";

const Detail = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { data: todo } = useQuery("todo", () => getTodos(id));
    const [edit, setEdit] = useState(false);
    const [editedWriter, setEditedWriter] = useState("");
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContents, setEditedContents] = useState("");

    const onChangeEditedWriter = (event) => {
        setEditedWriter(event.target.value);
    };
    const onChangeEditedTitle = (event) => {
        setEditedTitle(event.target.value);
    };
    const onChangeEditedContents = (event) => {
        setEditedContents(event.target.value);
    };

    // Playlist 삭제
    const navigate = useNavigate();
    const deleteMutation = useMutation(deleteTodos, {
        // 삭제하면 조회할 필요 없잖아...
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
            navigate("/list");
        },
    });
    const deleteButtonHandler = () => {
        alert("삭제 하시겠습니까?");
        deleteMutation.mutate(id);
        // 삭제하면 이전페이지(List)로 이동하기
    };

    // Playlist 수정
    const editMutation = useMutation(editTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
    const editButtonHandler = async () => {
        setEdit(!edit);
        if (edit) {
            const editedPlaylist = {
                id,
                name: editedWriter,
                title: editedTitle,
                contents: editedContents,
            };
            await editMutation.mutateAsync(editedPlaylist);
            queryClient.invalidateQueries("todo");
            alert("수정이 완료되었습니다.");
        } else {
            setEditedWriter(todo?.writer);
            setEditedTitle(todo?.title);
            setEditedContents(todo?.contents);
        }
    };

    return (
        <>
            <Body>
                <InputTag>
                    {edit ? (
                        <div>
                            <div>
                                <InputArea
                                    value={editedTitle}
                                    onChange={onChangeEditedTitle}
                                />
                            </div>
                            <div>
                                <InputAreaWriter
                                    value={editedWriter}
                                    onChange={onChangeEditedWriter}
                                />
                            </div>
                            <TextArea
                                value={editedContents}
                                onChange={onChangeEditedContents}
                            />
                        </div>
                    ) : (
                        <div>
                            <TitleTag>
                                {todo?.title}
                                <Span> Write by {todo?.writer}</Span>
                            </TitleTag>

                            <ContentTag>{todo?.contents}</ContentTag>
                        </div>
                    )}
                </InputTag>
                {/* <Comments /> */}
                <BtnGroup>
                    <Btn onClick={() => editButtonHandler(todo.id)}>
                        {edit ? "저장" : "수정"}
                    </Btn>
                    <Btn onClick={deleteButtonHandler}>삭제</Btn>
                </BtnGroup>
            </Body>
            <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
                <Goto>Go Back To Check-List</Goto>
            </Link>
        </>
    );
};

export default Detail;

const Body = styled.div`
    width: 40%;
    background-color: #d6d6d6;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px 20px;

    align-items: center;
    box-shadow: 6px 6px 10px lightgray;
`;
const TitleTag = styled.p`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
`;
const Span = styled.span`
    color: #808080;
    font-size: 12px;
    float: right;
    margin-top: 6px;
`;
const ContentTag = styled.p`
    height: 120px;
    margin-top: 10px;
    padding: 0 10px;
`;
const BtnGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Goto = styled.p`
    width: 40%;
    margin: 0 auto;
    margin-top: 10px;
    font-weight: bold;
    color: #7db3b0;
    text-align: right;
`;
const InputTag = styled.div`
    display: flex;
    justify-content: center;
`;
const InputAreaWriter = styled.input`
    width: 260px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 6px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
const InputArea = styled.input`
    width: 260px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 6px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
const TextArea = styled.textarea`
    width: 260px;
    height: 70px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 6px;
    padding: 0 4px;
    border-radius: 6px;
    border: 1px solid gray;
`;
