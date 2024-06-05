import React, { useState, useEffect } from "react";
const useToDos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  // handle side effects
  useEffect(() => {
    // run code to handle side effect
    const fetchToDos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_page=10"
      );
      const myToDos = await response.json();

      setLoading(false);
      setTodos(myToDos);
    };
    fetchToDos();
  }, []);

  return { todos, setTodos, loading };
};
export default useToDos;
