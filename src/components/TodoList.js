import { useContext } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { todoContext } from "../contexts/TodoContext";
import { authContext } from "../contexts/AuthContext";

const Navbar = () => {
  //Load Todo Context
  const { todoState } = useContext(todoContext);

  //Load Auth Context
  const { authenticated } = useContext(authContext);

  let body;

  if (authenticated)
    body = (
      <>
        <AddTodo />
        <ul>
          {todoState.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </>
    );
  else {
    body = <p style={{ textAlign: "center" }}>Not Authorised</p>;
  }

  return <div className="todo-list">{body}</div>;
};

export default Navbar;
