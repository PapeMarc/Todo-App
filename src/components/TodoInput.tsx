import { useState } from "react";

export default function TodoInput(props){
    const[todoText, setTodoText] = useState("");

    return <div>
        <span>New todo: </span>
        <input title="inputTodoText" type="text" value={todoText} onChange={event => {
            setTodoText(event.target.value);
        }}></input>
        <button onClick={() => {
            
        }}>Add</button>
    </div>; 
}