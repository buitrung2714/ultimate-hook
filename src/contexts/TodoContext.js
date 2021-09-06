import React, { useReducer, createContext, useEffect } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODO, SAVE_TODO } from "../reducers/types";

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //useReducer
  const [todoState, dispatch] = useReducer(todoReducer, []);

  // useEffect
  useEffect(() => {
    dispatch({
      type: GET_TODO,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODO,
      payload: { todoState },
    });
  }, [todoState]);

  //Context Data
  const TodoContextData = { todoState, dispatch };

  //Return
  return (
    <todoContext.Provider value={TodoContextData}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
