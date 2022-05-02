import React from "react";
import "./App.css";
import { useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect((todos) => {
    const fetchtodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      todos = data.slice(0, 10);
      console.log(todos);
      setTodos(todos);
    };
    fetchtodos();
  }, []);

  const addTodo = title => {
    const newTodos = [...todos, { title, completed:false}];
    console.log(newTodos)
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="heading"><h2>TODO LIST APP</h2></div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;