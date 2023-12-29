import "./InputField.scss";
import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        className="input__box"
        name="task"
        placeholder="enter a task"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit" className="input__submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
