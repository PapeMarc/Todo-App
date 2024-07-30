import { css, cx } from "@emotion/css";
import { flexColumn, flexRow, flexCenter } from "../common-styles";

export default function TodoList(props: any) {
   const todos = props.todos;

   const rootCss = css`
font-size: 16px;
`;

   return (
      <div className={cx(rootCss, flexColumn, flexCenter)}>
         {todos.map(
            (todo: { text: string, done: boolean }, index: number) => (
               <div key={index} className={cx(flexRow, flexCenter)}>
                  <input
                     title="doneCheckbox"
                     type="checkbox"
                     onChange={event => {
                        const checked = event.target.checked;
                        props.onDoneChange && props.onDoneChange(checked, index);
                     }}></input>
                  <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
               </div>
            )
         )}
      </div>
   );
}