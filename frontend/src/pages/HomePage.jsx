import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    axios.post('/api/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const completeTask = (id) => {
    const task = tasks.find(task => task.id === id);
    axios.put(`/api/tasks/${id}`, { ...task, completed: !task.completed })
      .then(response => setTasks(tasks.map(t => t.id === id ? response.data : t)))
      .catch(error => console.error('Error completing task:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
      <h2 className="text-xl font-bold mt-8 mb-4">Add New Task</h2>
      <AddTaskForm onAddTask={addTask} />
    </div>
  );
}

export default HomePage;