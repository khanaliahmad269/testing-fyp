import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
}

export default TaskList;