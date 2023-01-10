import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../features/api/components/Post";
import Board from "../pages/Board";
import List from "../features/api/components/List";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/board" element={<Board />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<Detail />} />
        {/* <Route path="/list/:id/num" element={<Detail />} /> */}
        {/* <Route path="/detail" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
