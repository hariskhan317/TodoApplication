import React, { useEffect, useState, useRef } from 'react'
import { todo } from '../models/model'
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
interface props {
    todo: todo;
    todos: todo[];
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
  }
const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [todoEdit, setTodoEdit] = useState<string>(todo.todo)
    const handleDelete = (id: number) => {
        const newTodoList = todos.filter((todo) => todo.id !== id);
        setTodos(newTodoList) 
    }
  const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id  === id ? {...todo, isDone: !todo.isDone} : todo));
  };
  
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: todoEdit } : todo))
    setIsEdit(false);
  }
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit])
  
  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e,todo.id)}>
      {isEdit ? (      <input
        type="text"
        ref={inputRef}
        className="input__Editbox"
        value={todoEdit}
        onChange={(e) => {
          setTodoEdit(e.target.value);
        }}
        placeholder='Edit a Task'
      />) : (todo.isDone ? (<s className='todos__single--text'>{todo.todo}</s>) : (<span className='todos__single--text'>{todo.todo}</span>))}
          <div>
        <span className="icon" onClick={() => {
          if (!isEdit && !todo.isDone) {
            setIsEdit(!isEdit);
          }
              }} >
                  <MdEdit />
              </span>
              <span className="icon">
                  <MdDelete onClick={() => handleDelete(todo.id)} />
              </span>
              <span className="icon">
                <IoMdCheckmark onClick={() => handleDone(todo.id)} />
              </span>
          </div>
    </form>
  )
}

export default SingleTodo;
