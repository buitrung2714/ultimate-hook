import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { todoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteEvent } = useContext(todoContext);
  const { theme } = useContext(ThemeContext);
  const { isLightBg, light, dark } = theme;
  const style = isLightBg ? light : dark;
  return (
    <li style={style} onClick={deleteEvent.bind(this, todo.id)}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
