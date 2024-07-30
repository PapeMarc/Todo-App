import { css, cx } from "@emotion/css";
import { flexColumn, flexRow, flexCenter } from "../common-styles";
import { Todo } from "./types";

export default function TodoList(props: any) {
   const todos = props.todos;

   const rootCss = css`
font-size: 16px;
`;

   return (
      <div className={cx(rootCss, flexColumn, flexCenter)}>
         <TodoEntryList
            todos={todos}
            onDoneChange={props.onDoneChange}
            onTodoDelete={props.onTodoDelete}
            filterFunction={(todo: Todo) => !todo.done}>
         </TodoEntryList>

         <hr style={{ width: "100%" }} />

         <TodoEntryList
            todos={todos}
            onDoneChange={props.onDoneChange}
            onTodoDelete={props.onTodoDelete}
            filterFunction={(todo: Todo) => todo.done}>
         </TodoEntryList>
      </div>
   );
}

function TodoEntryList(props: any) {
   const todos = props.todos;
   return (
      <div>
         {todos
            .filter(props.filterFunction)
            .map((todo: Todo) => (
               <div key={todo.id} className={cx(flexRow, flexCenter)}>
                  <input
                     title="doneCheckbox"
                     type="checkbox"
                     checked={todo.done}
                     onChange={(event) => {
                        const checked = event.target.checked;
                        props.onDoneChange && props.onDoneChange(checked, todo.id);
                     }}></input>
                  <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
                  <div style={{ flex: 1 }}></div>
                  <button onClick={() => props.onTodoDelete && props.onTodoDelete(todo.id)}>Delete</button>
               </div>
            ))}
      </div>)
}