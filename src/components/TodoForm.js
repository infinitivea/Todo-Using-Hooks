import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handlerChange = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handlerSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handlerChange}
            ref={inputRef}
          />
          <button type="submit" className="todo-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handlerChange}
            ref={inputRef}
          />
          <button type="submit" className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
