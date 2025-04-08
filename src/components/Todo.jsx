import React, { useReducer, useRef } from "react";

const Todo = () => {
  const inputRef = useRef();
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "addTodo": {
        inputRef.current.value = "";
        return [
          ...state,
          { id: Date.now(), text: action.payload, isCompleted: false },
        ];
      }
      case "toggleTodo": {
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: true } : todo
        );
      }
      case "deleteTodo": {
        return state.filter((todo) => todo.id !== action.payload);
      }
      default: {
        return state;
      }
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() =>
            dispatch({ type: "addTodo", payload: inputRef.current.value })
          }
        >
          Add Todo
        </button>

        {todos?.map((todo) => (
          <div key={todo.id}>
            <div>
              {todo.text} - {todo.isCompleted ? "Completed" : "Not Completed"}
            </div>
            <button
              onClick={() => dispatch({ type: "toggleTodo", payload: todo.id })}
            >
              {todo.isCompleted ? "Mark As Uncompleted" : "Mark As Completed"}
            </button>
            <button
              onClick={() => dispatch({ type: "deleteTodo", payload: todo.id })}
            >
              Delete Todo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
