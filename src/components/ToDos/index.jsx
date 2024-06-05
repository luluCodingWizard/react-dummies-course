import React, { useState, useCallback } from "react";
import ToDoItem from "../ToDoItem";
import ToDoItemForm from "../ToDoItemForm";
import useToDos from "../../hooks/useToDos";

const Index = () => {
  const { todos, setTodos, loading } = useToDos();
  const [showForm, setShowForm] = useState(false); // hook 2

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
  console.log(loading);
  if (loading) {
    return <div>loading...........</div>;
  }

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
