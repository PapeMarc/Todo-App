import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { css } from "@emotion/css";

function App() {
   const [todos, setTodos] = useState<{ text: string, done: boolean }[]>([]);
   const appCss = css`
    display: flex;
    flex-direction: column;
    font-size: 16px;
  `;

   return <div className={appCss}>
      <TodoInput onAddClicked={(todoText: string) => {
         setTodos(
            (oldTodos) => [...oldTodos, { text: todoText, done: false }]);
      }} />
      <TodoList
         todos={todos}
         onDoneChange={(done: boolean, index: number) => {
            const todo = todos[index];
            setTodos(
               (oldTodos) => oldTodos.map((todo, _index) => _index === index ? Object.assign(todo, { done }) : todo)
            )
         }} />
   </div>;
}

export default App;