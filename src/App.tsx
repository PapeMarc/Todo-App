import "./App.css";
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { css } from "@emotion/css";
import { Todo } from "./components/types";

function App(props: any) {

   const [todos, setTodos] = useState<Todo[]>([]);

   /* Funktion useEffect wird regulär immer aufgerufen, wenn gerendert wird. übergibt man zusätzlich ein Array, so können hier zustandswerte eingetragen werden. 
   UseEffect wird dann nur aufgerufen, wenn sich der Zustand von einem der übergebenen Werte verändert. Ist das Array leer, so wird diese Methode nur im Rahmen des
   Mount-Vorgangs aufgerufen.*/
   useEffect(() => {
      load().then((initialTodos) => setTodos(initialTodos));
   }, []);

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

async function load(): Promise<Todo[]> {
   return new Promise(resolve => {
      setTimeout(() => {
         const json = JSON.parse(window.localStorage.getItem("todos")!);
         console.log("resolved: " + json);
         resolve(json);
      }, 500)
   });
}