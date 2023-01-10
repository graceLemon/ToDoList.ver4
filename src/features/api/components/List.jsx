import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/ui/Header";

const List = () => {
  return (
    <div>
      <Header />
      <h1>List</h1>
      <Link to="/list/:id"> 여러 개의 글 보기 </Link>
    </div>
  );
};

export default List;

//글 리스트 페이지
//1. post 에서 넘어온 글이 리스트로 저장
//2. 글 1번 누르면 /detail 페이지로 넣어가야함
//3. 상세보기 링크
//4. 삭제버튼 누르면 삭제되기
//5. 수정버튼 누르면 글 수정
//상단에 헤더(홈으로 가기) 추가해야함
