import { Interface } from "readline";
import "./InputField.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };
  return (
    <form className="input">
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
