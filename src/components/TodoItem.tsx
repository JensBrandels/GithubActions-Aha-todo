import React from "react";

type TodoItemProps = {
  text: String;
  completed: boolean;
  onCheckboxChange: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onCheckboxChange,
  onDelete,
}) => {
  return (
    <li className="todoItem">
      <input type="checkbox" checked={completed} onChange={onCheckboxChange} />
      <span className={completed ? "completed" : ""}>{text}</span>
      <button className="deleteButton" onClick={onDelete}>
        🗑️
      </button>
    </li>
  );
};
export default TodoItem;
