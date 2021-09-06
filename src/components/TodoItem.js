import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { todoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(todoContext);
  const { theme } = useContext(ThemeContext);
  const { isLightBg, light, dark } = theme;
  const style = isLightBg ? light : dark;

  const deleteEvent = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };

  return (
    <li style={style} onClick={deleteEvent.bind(this, todo.id)}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
