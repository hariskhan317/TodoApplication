import React from 'react' 
import { todo } from '../models/model'
import "./style.css";
import SingleTodo from './singleTodo'

interface props {
  todos: todo[],
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

const TodoList: React.FC<props>= ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <div><SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /></div>
      ))}
    </div>
  )
}

export default TodoList;
