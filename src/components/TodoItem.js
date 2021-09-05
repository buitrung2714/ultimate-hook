const TodoItem = ({ todo,deleteEvent }) => {
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };
  return <li style={style} onClick={deleteEvent.bind(this, todo.id)}>{todo.title}</li>;
};

export default TodoItem;
