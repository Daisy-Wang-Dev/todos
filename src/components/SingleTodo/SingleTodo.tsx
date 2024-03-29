import { useEffect, useRef, useState } from "react";
import { Todo } from "../../model";
import "./SingleTodo.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   turn edit mode on and off
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <>
      <form
        className="todo__single"
        onSubmit={(e) => handleEdit(e, todo.id)}
        data-testid="taskItem"
      >
        {edit ? (
          <input
            title="edit mode"
            value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)}
            type="text"
            className="todo__single--text"
          />
        ) : (
          <span
            className={
              todo.isDone ? "todo__single--done" : "todo__single--text"
            }
          >
            {todo.todo}
          </span>
        )}
        <div>
          <span className="icon">
            <AiFillEdit
              title="edit"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete title="delete" />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone title="done" />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
