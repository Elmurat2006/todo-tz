import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { observer } from "mobx-react-lite" // Or "mobx-react".

import styled from 'styled-components'

const TodoApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 500px;
    min-height: 500px;
    background: white;
    text-align: center;
    margin: 128px auto;
    border-radius: 5px;
`

const Heading1 = styled.h1`
    margin: 32px 0;
    font-size: 24px;
` 

function App  () {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    // <GlobalStyle>
    <TodoApp>
      <header>
        <Heading1>
        Todo App
        </Heading1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </TodoApp>
    // </GlobalStyle>
  );
};

export default App;
