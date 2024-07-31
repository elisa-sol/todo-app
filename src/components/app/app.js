//верхний компонент

import React, { Component } from 'react';
import NewTaskForm from '../newTaskForm/newTaskForm';
import TaskList from '../taskList/taskList';
import Footer from '../footer/footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingTaskId: null,
      editingTaskText: '',
      filter: 'all',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.taskCounter = this.taskCounter.bind(this);
    this.setTaskFilter = this.setTaskFilter.bind(this);
    this.clearCompletedTasks = this.clearCompletedTasks.bind(this);
    this.getFilteredTasks = this.getFilteredTasks.bind(this);
  }

  handleInputChange(event) {
    this.setState({ newTask: event.target.value });
  }

  addTask() {
    if (this.state.newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        text: this.state.newTask,
        checked: false,
        date: new Date(),
      };
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTaskObject],
        newTask: '',
      }));
    }
  }

  deleteTask(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  editTask(id, text) {
    this.setState({ editingTaskId: id, editingTaskText: text });
  }

  updateTask(id, newText) {
    if (this.state.editingTaskText.trim() !== '') {
      this.setState((prevState) => ({
        tasks: prevState.tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)),
        editingTaskId: null,
        editingTaskText: '',
      }));
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  handleTaskChange(id, checked) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((t) => (t.id === id ? { ...t, checked } : t)),
    }));
  }

  taskCounter() {
    return this.state.tasks.filter((task) => !task.checked).length;
  }

  setTaskFilter(filter) {
    this.setState({ filter });
  }

  clearCompletedTasks() {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => !task.checked),
    }));
  }

  getFilteredTasks() {
    if (this.state.filter === 'all') {
      return this.state.tasks;
    } else if (this.state.filter === 'active') {
      return this.state.tasks.filter((task) => !task.checked);
    } else if (this.state.filter === 'completed') {
      return this.state.tasks.filter((task) => task.checked);
    }
    return this.state.tasks;
  }

  render() {
    return (
      <div className="todoapp">
        <h1>todos</h1>

        <NewTaskForm
          newTask={this.state.newTask}
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}
        />

        <TaskList
          tasks={this.getFilteredTasks()}
          onChange={this.handleTaskChange}
          onDelete={this.deleteTask}
          onEdit={this.editTask}
          onUpdate={this.updateTask}
          editingTaskId={this.state.editingTaskId}
          editingTaskText={this.state.editingTaskText}
          setEditingTaskText={(text) => this.setState({ editingTaskText: text })}
        />

        <Footer
          taskCounter={this.taskCounter()}
          clearCompletedTasks={this.clearCompletedTasks}
          setTaskFilter={this.setTaskFilter}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

//
