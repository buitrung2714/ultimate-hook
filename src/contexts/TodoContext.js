import React,{ useState,createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const todoContext = createContext();

const TodoContextProvider = ({children}) => {

    //State
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

    //Context Data
    const TodoContextData = { todoState,addEvent,deleteEvent };

    //Return
    return (
        <todoContext.Provider value={TodoContextData}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider
