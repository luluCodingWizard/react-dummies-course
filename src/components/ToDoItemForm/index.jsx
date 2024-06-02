import React, { useState } from "react";

const Index = ({ setShowForm, handleAdd }) => {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(title);
    setShowForm(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter To do title"
        value={title}
        onChange={handleOnChange}
      />
      <button type="submit">Add My To Do</button>
    </form>
  );
};

export default Index;
