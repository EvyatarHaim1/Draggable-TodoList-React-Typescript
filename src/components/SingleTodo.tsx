import React, { useEffect, useState, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../model";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos(todos: Todo[]): void;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  console.log();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : { ...todo }
      )
    );
    setEdit(false);
  };

  const isEdit = () => {
    if (edit) {
      return (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single__text"
        />
      );
    } else {
      if (todo.isDone) {
        return (
          <s>
            <span className="todos__single__text">{todo.todo}</span>
          </s>
        );
      } else {
        return <span className="todos__single__text">{todo.todo}</span>;
      }
    }
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {isEdit()}
          <div className="icons">
            <span className="icon">
              <AiFillEdit
                onClick={() => {
                  !edit && !todo.isDone && setEdit(!edit);
                }}
              />
            </span>
            <span className="icon">
              <AiFillDelete onClick={() => handleDelete(todo.id)} />
            </span>
            <span className="icon">
              <MdDone onClick={() => handleDone(todo.id)} />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
