import React from 'react';
import AddTaskForm from '../components/AddTaskForm';

function AddTaskPage() {
  const addTask = (task) => {
    // Logic to add task
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <AddTaskForm onAddTask={addTask} />
    </div>
  );
}

export default AddTaskPage;