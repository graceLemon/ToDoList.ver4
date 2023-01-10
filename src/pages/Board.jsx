import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/ui/Header";

const Board = () => {
  return (
    <div>
      <Header />
      <h1>board</h1>
      <Link to="/list">유저1의 글 리스트로 가기 아이디값 넣어주어야함</Link>
    </div>
  );
};

export default Board;
