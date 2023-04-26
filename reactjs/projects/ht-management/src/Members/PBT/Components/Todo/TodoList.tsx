import React from "react";
import { useTodoContext } from "./Todo";
import './TodoList.css'
const TodoList: React.FC = () => {
    const { state, actions } = useTodoContext();
    return (
        <div className="wrapper">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {state.todos.map((todo) => (
                    <li  style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }} key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => actions.toggleTodo(todo.id)}
                        />
                        {todo.text}
                    </li>
                ))}
            </ul><form
                onSubmit={(event) => {
                    event.preventDefault();
                    const input = (event.target as HTMLFormElement).elements.namedItem("text") as HTMLInputElement;
                    const text = input.value.trim();
                    if (text) {
                        actions.addTodo(text);
                        input.value = "";
                    }
                }}
            >
                <input
                    type="text"
                    name="text"
                    placeholder="Thêm mới công việc"
                    style={{ padding: '5px 10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button type="submit">Thêm mới</button>
            </form>
        </div>
    );
};
export default TodoList;