import React from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DoList from "../components/DoList";
import InnerList from "../components/InnerList";
// import Detail

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="DoList" element={<DoList />} />
                <Route path="DoList/:id" element={<InnerList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
