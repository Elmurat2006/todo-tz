import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
* {
    font-family: 'Open Sans';
  }
  body {
    background: linear-gradient(
      90deg,
      rgba(105, 20, 204, 1) 0%,
      rgba(44, 114, 251, 1) 100%
    );
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.4;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .todo-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 4px auto;

    padding: 16px;
    border-radius: 20px;
    width: 80%;
  }

  .todo-row input {
    margin-right: 10px;
  }

`
