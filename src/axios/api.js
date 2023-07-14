import axios from "axios";

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_SERVER_URL,
//     // timeout: 2000,
// });

// instance.interceptors.request.use(
//     //요청을 보내기 전 수행되는 함수
//     function (config) {
//         if (config.url === "/todos") {
//             console.log("인터셉터 요청 성공");
//         }
//         return config;
//     },

//     // 오류 요청을 보내기 전 수행되는 함수
//     function (error) {
//         console.log("인터셉터 오류");
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     // 응답을 보내기 전 수행되는 함수
//     function (response) {
//         console.log("인터셉터 응답 성공");
//         return response;
//     },

//     // 오류 응답을 보내기 전 수행되는 함수
//     function (error) {
//         console.log("인터셉터 응답 오류");
//         return Promise.reject(error);
//     }
// );

// export default instance;

const base = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// 전체 조회
const bringTodos = async () => {
    try {
        const response = await base.get(`/todos`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch todos:", error);
        throw error;
    }
};

// 상세 조회
const getTodos = async (id) => {
    const response = await base.get(`/todos/${id}`);
    return response.data;
};

// 추가
const addTodos = async (todo) => {
    await base.post(`/todos`, todo);
};

// 삭제
const deleteTodos = async (id) => {
    await base.delete(`/todos/${id}`);
};

// 수정
const editTodos = async (editTodo) => {
    await base.patch(`/todos/${editTodo.id}`, editTodo);
};

export { bringTodos, getTodos, addTodos, deleteTodos, editTodos };
