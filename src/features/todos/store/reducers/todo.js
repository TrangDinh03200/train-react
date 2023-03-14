import { todoAction } from "../actions";

export const TODO_INITIAL_STATE = {
  todoItem: {
    id: "",
    title: "",
  },
  todoList: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case todoAction.SET_TODO_LIST:
      return {
        ...state,
        todoList: [...state.todoList, ...payload],
      };
    default:
      throw new Error("Invalid Todo Action");
  }
};

export default reducer;
