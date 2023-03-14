import { createContext, useContext, useReducer } from "react";
import logger from "../../../utils/logger";
import { todoReducer, TODO_INITIAL_STATE } from "../store";

const TodoContext = createContext(TODO_INITIAL_STATE);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(todoReducer), TODO_INITIAL_STATE);
  const value = {
    state,
    dispatch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
