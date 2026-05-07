import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditTaskForm from '../components/EditTaskForm';

function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const editTask = (updatedTask) => {
    axios.put(`/api/tasks/${id}`, updatedTask)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      {task && <EditTaskForm task={task} onEditTask={editTask} />}
    </div>
  );
}

export default EditTaskPage;