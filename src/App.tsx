import {useState} from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([{text: "Do something.", done: false}, {text: "Do something else.", done: false}]);

  return <div className="App">
    <TodoInput/>
    <TodoList todos={todos}/>
  </div>;
}

export default App;