import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { todoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";

const AddTodo = () => {
  const { dispatch } = useContext(todoContext);
  const { theme } = useContext(ThemeContext);
  const { isLightBg, light, dark } = theme;
  const style = isLightBg ? light : dark;

  //State
  const [title, setTitle] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addForm = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: { todo: { id: uuidv4(), title } },
    });
    setTitle("");
  };

  return (
    <form onSubmit={addForm}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new Title...."
        value={title}
        onChange={onChangeTitle}
        required
      />
      <input type="submit" value="Submit" style={style} />
    </form>
  );
};

export default AddTodo;
