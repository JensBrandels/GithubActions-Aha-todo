import AhaLogo from "../assets/Aha!.svg";
import TodoItem from "../components/TodoItem";
import AddLogo from "../assets/add.svg";
import { useState } from "react";
import "./TodosPage.css";

//defining the Todo type
type Todo = {
  text: string;
  completed: boolean;
};

const TodosPage = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // function to check if a todo is less than 25 characters
  const handleAddTodo = () => {
    if (newTodo.length <= 30) {
      addTodo(newTodo);
    } else {
      alert("Text cannot exceed 25 characters.");
    }
  };

  // Function to actually add the todo to the state
  const addTodo = (todoText: string) => {
    if (todoText.trim() === "") return; // Prevent adding empty todos
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: todoText, completed: false },
    ]);
    setNewTodo("");
  };

  // Function to toggle completion state of a todo
  const handleCheckBoxChange = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); // Update the state
  };

  // Function to delete a todo
  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Update the state
  };

  return (
    <>
      <div className="todoMainContainer">
        <header className="todoHeader">
          <img src={AhaLogo} alt="" />
        </header>
        <div className="todos">
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
        <footer className="todoFooter">
          <input
            type="text"
            name=""
            id=""
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <p onClick={handleAddTodo}>
            <img src={AddLogo} alt="" />
          </p>
        </footer>
      </div>
    </>
  );
};

export default TodosPage;
