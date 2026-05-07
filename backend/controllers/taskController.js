const tasks = [
  { id: 1, title: 'Sample Task 1', description: 'This is a sample task', completed: false, created_at: new Date() },
  { id: 2, title: 'Sample Task 2', description: 'This is another sample task', completed: true, created_at: new Date() }
];

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description, completed: false, created_at: new Date() };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const task = tasks.find(t => t.id === parseInt(id));
  if (task) {
    task.title = title;
    task.description = description;
    task.completed = completed;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};