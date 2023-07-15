import React, { useState } from "react";
import Comments from "../components/Comments";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTodos, editTodos, getTodos } from "../axios/api";

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
        } else {
            setEditedWriter(todo?.writer);
            setEditedTitle(todo?.title);
            setEditedContents(todo?.contents);
        }
    };

    return (
        <>
            <Link to="/list">
                <div>↩️</div>
            </Link>
            <div>
                {edit ? (
                    <div>
                        <div>
                            <input
                                value={editedTitle}
                                onChange={onChangeEditedTitle}
                            />
                        </div>
                        <div>
                            <input
                                value={editedWriter}
                                onChange={onChangeEditedWriter}
                            />
                        </div>
                        <textarea
                            value={editedContents}
                            onChange={onChangeEditedContents}
                        />
                    </div>
                ) : (
                    <div>
                        <div>📀{todo?.title}</div>
                        <div>{todo?.writer}</div>
                        <div>{todo?.contents}</div>
                    </div>
                )}
            </div>
            {/* <Comments /> */}
            <div>
                <button onClick={deleteButtonHandler}>삭제</button>
                <button onClick={() => editButtonHandler(todo.id)}>
                    {edit ? "저장" : "수정"}
                </button>
            </div>
        </>
    );
};

export default Detail;
