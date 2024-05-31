import React, { useState } from "react";

const AddAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle submission logic here
    console.log("Assignment submitted:", { title, description, dueDate });

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Add Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Assignment
        </button>
      </form>
    </div>
  );
};

export default AddAssignment;
