import "./TodoList.scss";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {Array.from(todos).map((todo) => (
        <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
