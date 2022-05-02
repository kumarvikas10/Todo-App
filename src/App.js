import React from "react";
import "./App.css";
import { useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Loader from "./Loader";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading]= useState(true);
  useEffect((todos) => {
    const fetchtodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      todos = data.slice(0, 10);
      console.log(todos);
      setTodos(todos);
      setLoading(false)
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

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <div className="heading"><h2>TODO LIST APP</h2></div>
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;