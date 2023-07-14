// import React from "react";
// import { useEffect, useState } from "react";
// // import axios from "axios";
// import api from "../axios/api";

// function Home() {
//     const [todos, setTodos] = useState(null);
//     const [todo, setTodo] = useState({
//         title: "",
//     });

//     // const [inputWriter, setInputWriter] = useState({
//     //     writer: "",
//     // });
//     // // const [inputValue, setInputValue] = useState({
//     // //     title: "",
//     // // });
//     // const [inputContent, setInputContent] = useState({
//     //     content: "",
//     // });

//     const [targetId, setTargetId] = useState("");
//     const [edit, setEdit] = useState("");

//     // 비동기 함수 : 서버(json-server)에 todos를 요청하는 함수
//     // 기존 db 조회하기
//     const fetchTodo = async () => {
//         const { data } = await api.get("/todos");
//         // console.log("data", data);
//         setTodos(data);
//     };

//     // 기존 db에 추가하기
//     const onSubmit = async (todo) => {
//         await api.post("/todos", todo);
//         setTodos([...todos, todo]);
//         setTodo({
//             title: "",
//         });
//         // fetchTodo();
//     };

//     // 삭제하기
//     const onDelete = async (id) => {
//         await api.delete(`/todos/${id}`);
//         setTodos(
//             todos.filter((item) => {
//                 return item.id !== id;
//             })
//         );
//     };

//     // 수정하기
//     const onEdit = async (targetId, edit) => {
//         await api.patch(`/todos/${targetId}`, {
//             title: edit,
//         });

//         setTargetId("");
//         setEdit("");

//         setTodos(
//             todos.map((item) => {
//                 if (item.id == targetId) {
//                     return { ...item, title: edit };
//                 } else {
//                     return item;
//                 }
//             })
//         );
//     };

//     useEffect(() => {
//         // db.json으로 부터 값을 가져옴
//         fetchTodo();
//     }, []);

//     return (
//         <div>
//             <h1>반갑습니다.</h1>
//             <h5>당신의 여행을 계획해 보세요🌴</h5>

//             {/* 해당 id 입력후 내용 수정 input */}
//             <div>
//                 <input
//                     type="text"
//                     placeholder="수정할 id"
//                     value={targetId}
//                     onChange={(e) => {
//                         setTargetId(e.target.value);
//                     }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="수정할 내용"
//                     value={edit}
//                     onChange={(e) => {
//                         setEdit(e.target.value);
//                     }}
//                 />
//                 <button onClick={() => onEdit(targetId, edit)}>수정</button>
//                 <br />
//                 <br />
//             </div>
//             <br />

//             {/* input영역  */}
//             <div>
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         // 버튼 클릭시 input에 들어있는 값(state)를 이용하여 DB에 저장(POST 요청)
//                         onSubmit(todo);
//                     }}
//                 >
//                     {/* <input
//                         type="text"
//                         placeholder="작성자 성함을 작성해 주세요."
//                         value={inputWriter.writer}
//                         onChange={(e) => {
//                             setInputWriter({ writer: e.target.value });
//                         }}
//                     /> */}
//                     <input
//                         type="text"
//                         placeholder="여행에 필요한 리스트를 하세요!"
//                         onChange={(e) => {
//                             const { value } = e.target;
//                             setTodo({ title: value });
//                         }}
//                         value={todo.title}
//                     />
//                     {/* <input
//                         type="text"
//                         placeholder="자세한 내용을 메모해 보세요."
//                         value={inputContent.content}
//                         onChange={(e) => {
//                             setInputContent({ content: e.target.value });
//                         }}
//                     /> */}
//                     <button type="submit">추가</button>
//                 </form>
//             </div>

//             {/* 데이터 영역 */}
//             <div>
//                 {todos?.map((todo, index) => {
//                     return (
//                         <div key={index}>
//                             <h3>{todo.id}</h3>
//                             <p>{todo.title}</p>
//                             &nbsp;
//                             <button
//                                 onClick={() => {
//                                     onDelete(todo.id);
//                                 }}
//                             >
//                                 삭제
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Home;
