import React, { useState } from "react";
import "./App.scss";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    } else {
      console.log("Please enter a task");
    }
  };

  return (
    <>
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </>
  );
};

export default App;
