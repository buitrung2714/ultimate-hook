import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Navbar = () => {
  const [todoState, setTodoState] = useState([
    { id: uuidv4(), title: "Viec 1" },
    { id: uuidv4(), title: "Viec 2" },
    { id: uuidv4(), title: "Viec 3" },
  ]);

  //Add new title
  const addEvent = (addForm) => {
    setTodoState([...todoState, addForm]);
  };

  //Delete a title
  const deleteEvent = (id) => {
    setTodoState(todoState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <AddTodo addEvent={addEvent} />
      <ul>
        {todoState.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} deleteEvent={deleteEvent} />
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
