import React, { memo } from "react";

const Index = ({ todo, toggleCompletion }) => {
  const toggle = () => {
    toggleCompletion(todo.id);
  };
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={todo.completed} onChange={toggle} />
      <h3>{todo.title}</h3>
    </div>
  );
};

export default memo(Index);
