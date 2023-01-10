import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/ui/Header";

const Detail = () => {
  const { id } = useParams();
  console.log("디테일 페이지");

  return (
    <div>
      <Header />
      <h1>{id}번 글 입니다.</h1>
    </div>
  );
};

export default Detail;

//글 디테일 페이지
//1. list 에서 넘어온 글 자세히 확인
//2. 삭제버튼 누르면 삭제되기
//3. 수정버튼 누르면 글 수정
//상단에 헤더(홈으로 가기) 추가해야함
