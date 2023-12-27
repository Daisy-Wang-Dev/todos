import "./InputField.scss";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="text"
        className="input__box"
        name="task"
        placeholder="enter a task"
      />
      <button type="submit" className="input__submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
