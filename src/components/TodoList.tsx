import { css, cx } from "@emotion/css";
import { flexColumn, flexRow, flexCenter } from "../common-styles";

export default function TodoList(props: any) {
   const todos = props.todos;

   const rootCss = css`
font-size: 16px;
`;

   return (
      <div className={cx(rootCss, flexColumn, flexCenter)}>
         {todos
            .filter((todo) => !todo.done)
            .map((todo) => (
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
               </div>
            )
            )}
         <hr style={{ width: "100%" }} />
         {todos
            .filter((todo) => todo.done)
            .map((todo) => (
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
               </div>
            )
            )}
      </div>
   );
}