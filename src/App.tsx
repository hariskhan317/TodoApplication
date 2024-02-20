import { useState } from 'react';
import './App.css';
import InputField from "./components/inputField";
import { todo } from "./models/model";
import TodoList from "./components/todoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<todo[]>([])
  const [completeTodos, setCompleteTodos] = useState<todo[]>([])

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }  

  const handleOnDragEnd = (result: DropResult) => {
    console.log(result)
    const { destination, source } = result
    
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    
    let add;
    let active = todos;
    let complete = completeTodos;

    // write a logic for drag and drop
    if
      
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
