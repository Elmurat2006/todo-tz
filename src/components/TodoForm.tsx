import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components'
interface TodoFormProps {
  addTodo: AddTodo;
}

const Form = styled.form`
    margin-bottom: 32px;
`

const TodoButton = styled.button`
padding: 16px;
border: none;
border-radius: 0 20px 20px 0;
cursor: pointer;
outline: none;
background: linear-gradient(
  90deg,
  rgba(105, 20, 204, 1) 0%,
  rgba(44, 114, 251, 1) 100%
);
color: #fff;
text-transform: capitalize;
`

const TodoInput = styled.input`
padding: 15px 32px 15px 16px;
border-radius: 20px 0 0 20px;
border: 1px solid #dfe1e5;
outline: none;
width: 320px;
background: transparent;
`

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <Form>
      <TodoInput type="text" value={newTodo}  placeholder="Add a todo" onChange={handleChange} />
        <TodoButton type="submit"  onClick={handleSubmit}>
          Add Todo
        </TodoButton>
    </Form>
  )
};
