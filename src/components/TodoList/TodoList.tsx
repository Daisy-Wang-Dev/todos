import "./TodoList.scss";
import { Todo } from "../../model";

interface Props {
    todos:Set<Todo>;
    setTodos:React.Dispatch<React.SetStateAction<Set<Todo>>>;
}
const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className="todos">
      {Array.from(todos).map(todo => 
      <li key={todo.id}>
        {todo.todo}
      </li>
        )}

      
    </div>
  )
}

export default TodoList
