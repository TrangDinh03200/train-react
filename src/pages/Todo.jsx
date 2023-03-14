import Todo from "../features/todos";
import { TodoProvider } from "../features/todos/context/TodoContext";

const TodoPage = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
};

export default TodoPage;
