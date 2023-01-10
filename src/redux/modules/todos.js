// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: id,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (id) => {
  return {
    type: GET_TODO_BY_ID,
    payload: id,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트1",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
    {
      id: "2",
      title: "리액트2",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

//reducer
const todos = (state = initialState, action) => {
  //console.log(state,'initialState',문제2번");
  //console.log(action.payload);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, //스프레드 연산자는 객체는 배열이든 기존에 있던 데이터를 넣어 유지 시켜주겠다는 것
        todos: [...state.todos, action.payload], //todos 데이터 넣어주기
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
