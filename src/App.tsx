import React, { useState } from "react";
import "./App.scss";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  return (
    <>
      <Header />
      <InputField todo={todo} setTodo={setTodo}/>
    </>
  );
};

export default App;
