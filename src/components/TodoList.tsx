import { useState } from "react";

export default function TodoList(props : any){
    const todos = props.todos;

    return (
        <div>
            {todos.map(
                (todo : {text : string, done : boolean}, index : number) => (
                    <div key={index}>
                        <input 
                        title="doneCheckbox" 
                        type="checkbox" 
                        onChange={event => {
                            const checked = event.target.checked;
                            props.onDoneChange && props.onDoneChange(checked, index);
                        }}></input>
                        <span style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}</span>
                    </div>
                )
            )}
        </div>
    ); 
}