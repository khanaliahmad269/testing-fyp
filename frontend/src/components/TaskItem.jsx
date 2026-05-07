import React from 'react';

function TaskItem({ task, onDelete, onComplete }) {
  return (
    <div className="bg-white p-4 shadow-md rounded mb-4 flex justify-between items-center">
      <div>
        <h3 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => onComplete(task.id)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;