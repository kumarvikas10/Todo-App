import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Loader from "./Loader";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchtodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      const todoArray = data.slice(0, 10);
      console.log(todoArray);
      setTodos(todoArray);
      setLoading(false);
    };
    fetchtodos();
  }, []);

  const addTodo = (title) => {
    const newTodos = [...todos, { title, completed: false }];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos);
    setTodos(newTodos);
  };

  // const editTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   console.log(newTodos);
  //   setTodos(newTodos);
  // };

  if (loading) {
    return <Loader />;
  }
  console.log(todos);
  return (
    <div className="App">
      <div className="heading">
        <h2>TODO LIST APP</h2>
      </div>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <TodoList
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              // editTodo= {editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
