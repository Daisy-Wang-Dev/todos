import React, { useState } from "react";
import "./App.scss";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Set<Todo>>(new Set());

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos(todos.add({ id: Date.now(), todo, isDone: false }));
      setTodo("");
    } else {
      console.log("Please enter a task");
    }
  };
console.log(todos)
  return (
    <>
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
};

export default App;
