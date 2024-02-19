import { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { todo } from './models/model'
import TodoList from './components/todoList'

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<todo[]>([])

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
