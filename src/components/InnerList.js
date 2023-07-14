import React, { useState } from "react";
// import Comments from "../components/Comments";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTodos, deleteTodos, editTodos } from "../axios/api";

function InnerList() {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { data: todos } = useQuery("todos", () => getTodos(id));
    const [edit, setEdit] = useState(false);
    const [editedWriter, setEditedWriter] = useState("");
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");

    const editInputWriter = (e) => {
        setEditedWriter(e.target.value);
    };
    const editInputTitle = (e) => {
        setEditedTitle(e.target.value);
    };
    const editInputContent = (e) => {
        setEditedContent(e.target.value);
    };

    // Todos 삭제
    const deleteMutation = useMutation(deleteTodos, {
        // 삭제하면 조회할 필요 없잖아...
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    const navigate = useNavigate();

    const deleteOn = () => {
        // alert("삭제하시겠어요?");
        console.log(todos);
        deleteMutation.mutate(id);

        navigate("/DoList");
    };

    // Todos 수정
    const editMutation = useMutation(editTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
    const editOn = () => {
        setEdit(!edit);
        if (!edit) {
            setEditedWriter(todos?.writer);
            setEditedTitle(todos?.title);
            setEditedContent(todos?.content);
        } else {
            const editedTodos = {
                id,
                writer: editedWriter,
                title: editedTitle,
                content: editedContent,
            };
            editMutation.mutate(editedTodos);
        }
    };

    return (
        <>
            <Link to="/Dolist">
                <div>↩️</div>
            </Link>
            <div>
                <div>
                    <button onClick={() => deleteOn(id)}>삭제</button>
                    <button onClick={() => editOn(todos?.id)}>
                        {edit ? "저장" : "수정"}
                    </button>
                </div>
                {edit ? (
                    <div>
                        <div>
                            <input
                                value={editedTitle}
                                onChange={editInputTitle}
                            />
                        </div>
                        <div>
                            <input
                                value={editedWriter}
                                onChange={editInputWriter}
                            />
                        </div>
                        <textarea
                            value={editedContent}
                            onChange={editInputContent}
                        />
                    </div>
                ) : (
                    <div>
                        <div>{todos?.title}</div>
                        <div>{todos?.writer}</div>
                        <div>{todos?.content}</div>
                    </div>
                )}
            </div>
            {/* <Comments /> */}
        </>
    );
}

export default InnerList;
