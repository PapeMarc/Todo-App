import { useState } from "react";

export default function TodoInput(props : any){
    const todos = props.todos;

    return (
        <div>
            {todos.map(todo => (
                <div>{todo.text}</div>
            ))}
        </div>
    ); 
}