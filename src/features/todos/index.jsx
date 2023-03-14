import React, { useEffect } from "react";
import useSystemContext from "../../context/SystemContext";
import PageContainer from "../../layouts/PageContainer";
import { systemAction } from "../../store";
import { API, sleep } from "../../utils";
import TodoList from "./components/Todo/TodoList";
import useTodoContext from "./context/TodoContext";
import { todoAction } from "./store";

const Todo = () => {
  const systemCtx = useSystemContext();
  const todoCtx = useTodoContext();

  const { state: systemState, dispatch: systemDispatch } = systemCtx;
  const { state: todoState, dispatch: todoDispatch } = todoCtx;

  const { isLoading } = systemState;
  const { todoList } = todoState;

  useEffect(() => {
    // Start loading
    systemDispatch({
      type: systemAction.SET_LOADING,
      payload: true,
    });

    const getTodoList = async () => {
      try {
        const response = await API.fetchData();
        // Delay 1s
        await sleep(1000);
        // Update state
        if (response?.length) {
          todoDispatch({
            type: todoAction.SET_TODO_LIST,
            payload: response,
          });
        }
      } catch (e) {
        console.log("Error: ", e);
      } finally {
        // End loading
        systemDispatch({
          type: systemAction.SET_LOADING,
          payload: false,
        });
      }
    };

    // Call api
    getTodoList();
  }, []);

  return (
    <PageContainer isLoading={isLoading}>
      <TodoList todoList={todoList} />
    </PageContainer>
  );
};

export default Todo;
