
import React from "react";
import { useTodoContext } from "./Todo";

const TodoSummary: React.FC = () => {
  const { state } = useTodoContext();

  const completedCount = state.todos.filter((todo) => todo.completed).length;

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <p style={{fontSize:'22px'}}>{`Tổng các công việc phải làm: ${state.todos.length}`}</p>
      <p style={{fontSize:'22px'}}>{`Các công việc đã hoàn thành: ${completedCount}`}</p>
    </div>
  );
};

export default TodoSummary;
