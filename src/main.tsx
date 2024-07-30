import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Todo } from './components/types.tsx';

const reactRoot = ReactDOM.createRoot(document.getElementById('root')!);

const initialTodos = load();

reactRoot.render(
   <React.StrictMode>
      <App initialTodos={initialTodos} />
   </React.StrictMode>,
)

function load() {
   const raw = window.localStorage.getItem("todos");
   const json = JSON.parse(raw!);
   return json ? json : Array<Todo>;
}