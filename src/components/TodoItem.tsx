import React from "react";
import RemoveLogo from "../assets/remove.png";

type TodoItemProps = {
  text: string;
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
      <p className="deleteButton" onClick={onDelete}>
        <img src={RemoveLogo} alt="" />
      </p>
    </li>
  );
};
export default TodoItem;
