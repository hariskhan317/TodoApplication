import React, { useRef } from 'react';
import "./style.css";

interface TodoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      e.preventDefault();
      handleAdd();
      inputRef.current?.blur();
    }}>
      <input
        type="text"
        ref={inputRef}
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a Task'
      />
      <button className='input_submit' type="submit">Go</button>
    </form>
  );
};

export default InputField;
