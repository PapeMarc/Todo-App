import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { css } from "@emotion/css";
import { Todo } from "./components/types";

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);
   const appCss = css`
    display: flex;
    flex-direction: column;
    font-size: 16px;
  `;

   return <div className={appCss}>
      <TodoInput onAddClicked={(todoText: string) => {
         setTodos(
            (oldTodos) => [...oldTodos, { text: todoText, done: false, id: (Date.now() * Math.random()).toString() }
            ]);
      }} />
      <TodoList
         todos={todos}
         onDoneChange={(done: boolean, id: string) => {
            setTodos((oldTodos) => oldTodos.map((todo) => (todo.id === id ? Object.assign(todo, { done }) : todo)))
         }} />
   </div>;
}

export default App;