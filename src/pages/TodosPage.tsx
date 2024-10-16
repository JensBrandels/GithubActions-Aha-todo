import AhaLogo from "../assets/Aha!.svg";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

const TodosPage = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todos, setTodos) => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleCheckBoxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todos, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="todoMainContainer">
        <header>
          <img src={AhaLogo} alt="" />
        </header>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onCheckboxChange={() => handleCheckBoxChange(index)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        </div>
        <footer>
          <input
            type="text"
            name=""
            id=""
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <p
            onClick={() => {
              addTodo(todos, setTodos);
            }}
          >
            +
          </p>
        </footer>
      </div>
    </>
  );
};

export default TodosPage;
