import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { css } from "@emotion/css";
import { Todo } from "./components/types";

function App(props: any) {
   const [todos, setTodos] = useState<Todo[]>(props.initialTodos);
   const appCss = css`
    display: flex;
    flex-direction: column;
    font-size: 16px;
  `;

   return <div className={appCss}>
      <TodoInput onAddClicked={(todoText: string) => {
         setTodos(
            (oldTodos) => {
               const newTodos = [...oldTodos, { text: todoText, done: false, id: (Date.now() * Math.random()).toString() }];
               save(newTodos);
               return newTodos;
            }
         );
      }} />
      <TodoList
         todos={todos}
         onDoneChange={(done: boolean, id: string) => {
            setTodos((oldTodos) => {
               const newTodos = oldTodos.map((todo) => (todo.id === id ? Object.assign(todo, { done }) : todo));
               save(newTodos);
               return newTodos;
            })
         }}
         onTodoDelete={(todoId: string) => {

            setTodos((oldTodos) => {
               const newTodos = oldTodos.filter((todo) => todo.id !== todoId);
               save(newTodos);
               return newTodos;
            });
         }} />
   </div>;
}

export default App;

function save(todos: Todo[]) {
   window.localStorage.setItem("todos", JSON.stringify(todos));
}