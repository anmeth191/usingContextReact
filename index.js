
import React from 'react';
import ReactDOM from 'react-dom';
import ContextTodoProvider from './ContextTodo';
import App from './App';


ReactDOM.render(
  <ContextTodoProvider>
  <App />
  </ContextTodoProvider>
  , document.querySelector('#root')
)