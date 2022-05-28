import React, {useEffect, useState } from "react";

function TodoList({ todo, index, completeTodo, deleteTodo }) {
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => { 
    console.log(todo.title)
    setTitle(todo.title)
  }, [todo])

  const editTodo = () => {
    setEdit(true)
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const saveTodo =() => {
    setEdit(false)
  }
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {edit ?(<input className="inputTodo" value={title} onChange={handleChange} />):<div className="title">{title}</div>}
        <div className="buttons">
          <div  className="editbtn" onClick={() => editTodo(index)}><i class="fa-regular fa-pen-to-square"></i></div>
          {edit?(<div  className="savebtn" onClick={() => saveTodo(index)}><i class="fa-regular fa-floppy-disk"></i></div>):null}
          <div  className="completebtn" onClick={() => completeTodo(index)}><i class="fa-regular fa-circle-check"></i></div>
          <div className="deletebtn" onClick={() => deleteTodo(index)}><i class="fa-regular fa-trash-can"></i></div>
        </div>
      </div>
    );
  }
export default TodoList;