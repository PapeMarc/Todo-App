import {useState} from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState<{text: string, done: boolean}[]>([]);

  return <div className="App">
    <TodoInput onAddClicked={(todoText : string) => {
      setTodos(
        (oldTodos) => [...oldTodos, {text: todoText, done: false}]);
    }}/>
    <TodoList 
    todos={todos} 
    onDoneChange={(done : boolean, index : number)=> {
      const todo = todos[index];
      setTodos(
        (oldTodos) => oldTodos.map((todo, _index) => _index === index ? Object.assign(todo, {done}) : todo)
      )
    }}/>
  </div>;
}

export default App;