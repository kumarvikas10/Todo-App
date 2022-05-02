import React from "react";

function TodoList({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.title}
        <div>
          <button  className="btn" onClick={() => completeTodo(index)}>Complete</button>
          <button className="btn" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }
export default TodoList;