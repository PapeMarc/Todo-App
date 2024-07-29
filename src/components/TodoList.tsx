import { useState } from "react";

export default function TodoList(props : any){
    const todos = props.todos;

    return (
        <div>
            {todos.map((todo : {text : string, done : boolean}, index : number) => (
                <div key={index}>{todo.text}</div>
            ))}
        </div>
    ); 
}