// верхний компонент

import React, { useState } from 'react';

import Footer from './assets/footer/footer';
import NewTaskForm from './assets/newTaskForm/newTaskForm';
import TaskList from './assets/taskList/taskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskChange = (id, checked) => {
    setTasks((prevTasks) => prevTasks.map((t) => (t.id === id ? { ...t, checked } : t)));
  };

  const setTaskFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const getFilteredTasks = () => {
    if (filter === 'all') {
      return tasks;
    }

    if (filter === 'active') {
      return tasks.filter((task) => !task.checked);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.checked);
    }

    return tasks;
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        checked: false,
        date: new Date(),
      };

      setTasks((prevTasks) => [...prevTasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = (id, newText) => {
    if (editingTaskText.trim() !== '') {
      setTasks((prevTasks) => prevTasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
      setEditingTaskId(null);
      setEditingTaskText('');
    }
  };

  const taskCounter = () => {
    return tasks.filter((task) => !task.checked).length;
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.checked));
  };

  return (
    <div className="todoapp">
      <h1>todos</h1>

      <NewTaskForm newTask={newTask} handleInputChange={handleInputChange} handleKeyPress={handleKeyPress} />

      <TaskList
        tasks={getFilteredTasks()}
        onChange={handleTaskChange}
        onDelete={deleteTask}
        onEdit={editTask}
        onUpdate={updateTask}
        editingTaskId={editingTaskId}
        editingTaskText={editingTaskText}
        setEditingTaskText={setEditingTaskText}
      />

      <Footer
        taskCounter={taskCounter()}
        clearCompletedTasks={clearCompletedTasks}
        setTaskFilter={setTaskFilter}
        filter={filter}
      />
    </div>
  );
}

export default App;
