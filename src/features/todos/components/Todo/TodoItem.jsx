const TodoItem = ({ todo }) => {
  return <p>{`${todo.id}: ${todo.title}`}</p>;
};

export default TodoItem;
