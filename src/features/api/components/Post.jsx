import React from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/ui/Header";
// import nextId from "react-id-generator";

const Post = () => {
  // const id = nextId();
  // const dispatch = useDispatch;
  const navigate = useNavigate();

  const goToList = () => {
    navigate("/List");
  };

  return (
    <div>
      <Header />
      <h1>post</h1>
      <form>
        <label>작성자</label>
        <input
          type="text"
          placeholder="작성자의 이름을 입력해주세요"
          maxLength={10}
        />
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력해주세요. (50자 이내)"
          maxLength={50}
        />
        <label>내용</label>
        <textarea
          maxLength={200}
          placeholder="내용을 입력해주세요 (200자 이내)"
        />
      </form>
      <button onClick={goToList}> 저장 </button>
      <button onClick={goToList}> 그냥 리스트 가기 </button>
    </div>
  );
};

export default Post;

//글 작성 페이지
//1. 작성자,제목,내용 input 박스 만들고
//2. 작성완료 누르면 /list 페이지 가서 글이 저장되어야하고
//3. 상단에 헤더(홈으로 가기) 추가해야함
