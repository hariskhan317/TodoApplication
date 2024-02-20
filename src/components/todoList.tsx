import React from 'react' 
import { todo } from '../models/model'
import "./style.css";
import SingleTodo from './singleTodo'
import { Droppable } from "react-beautiful-dnd";
interface props {
  todos: todo[],
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>
  completeTodos: todo[],
  setCompleteTodos: React.Dispatch<React.SetStateAction<todo[]>>
}

const TodoList: React.FC<props>= ({todos, setTodos, completeTodos, setCompleteTodos}) => {
  return (
    <div className='container'>
      <Droppable droppableId="activeTodo">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef} {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}>
            <span className="todos__heading">Active Task</span>
            {todos.map((todo, index) => (
              <div><SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /></div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completeTodo">
      {(provided, snapshot) => (
          <div
            ref={provided.innerRef} {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`}>
            <span className="todos__heading">Complete Task</span>
            {completeTodos.map((todo, index) => (
              <div><SingleTodo index={index} key={todo.id} todo={todo} todos={completeTodos} setTodos={setCompleteTodos} /></div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList;
