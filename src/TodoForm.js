import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="submitbtn" onClick={() => handleSubmit}>Add Todo<i class="fa-solid fa-list"></i></button>
      </form>
    );
  }

  export default TodoForm; 