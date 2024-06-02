import React, { useState, useEffect, useCallback } from "react";
import ToDoItem from "../ToDoItem";
import ToDoItemForm from "../ToDoItemForm";

const Index = () => {
  const [todos, setTodos] = useState([]); // hook 1
  const [showForm, setShowForm] = useState(false); // hook 2

  // handle side effects
  useEffect(() => {
    // run code to handle side effect
    const fetchToDos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_page=10"
      );
      const myToDos = await response.json();
      setTodos(myToDos);
    };
    fetchToDos();
  }, []);
  const handleAddItem = () => {
    setShowForm(true);
  };
  const handleAddingNewItem = (newToDo) => {
    console.log(newToDo);
    setTodos([
      ...todos,
      {
        userId: 1,
        id: 5,
        title: newToDo,
        completed: false,
      },
    ]);
  };

  const handleToddleCompletionOfItem = useCallback((itemId) => {
    setTodos((prevToDosState) =>
      prevToDosState.map((todo) =>
        todo.id === itemId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <>
      {showForm ? (
        <ToDoItemForm
          setShowForm={setShowForm}
          handleAdd={handleAddingNewItem}
        />
      ) : (
        <div className="todo-list">
          <button onClick={handleAddItem}>Add new Item</button>
          {todos.map((todo) => (
            <ToDoItem
              todo={todo}
              key={todo.id}
              toggleCompletion={handleToddleCompletionOfItem}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Index;
