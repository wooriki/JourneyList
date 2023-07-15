import axios from "axios";

const base = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// 전체 조회
const checkTodos = async () => {
    const response = await base.get(`/todos`);
    return response.data;
};

// 상세 조회
const getTodos = async (id) => {
    const response = await base.get(`/todos/${id}`);
    return response.data;
};

// 추가
const addTodos = async (newPlaylist) => {
    await base.post(`/todos`, newPlaylist);
};

// 삭제
const deleteTodos = async (id) => {
    await base.delete(`/todos/${id}`);
};

// 수정
const editTodos = async (editedPlaylist) => {
    await base.patch(`/todos/${editedPlaylist.id}`, editedPlaylist);
};

export { checkTodos, getTodos, addTodos, deleteTodos, editTodos };
