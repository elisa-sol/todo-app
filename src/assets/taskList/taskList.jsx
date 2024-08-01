// список задач

import { Component } from "react";
import "../taskList/taskList.css";
import Task from "../task/task.jsx";
import PropTypes from "prop-types";

export default class TaskList extends Component {
  render() {
    const {
      tasks,
      onChange,
      onDelete,
      onEdit,
      onUpdate,
      editingTaskId,
      editingTaskText,
      setEditingTaskText,
    } = this.props;
    return (
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChange={onChange}
            onDelete={onDelete}
            onEdit={onEdit}
            onUpdate={onUpdate}
            isEditing={task.id === editingTaskId}
            editingText={editingTaskText}
            setEditingTaskText={setEditingTaskText}
          />
        ))}
      </ul>
    );
  }
}

TaskList.defaultProps = {
  tasks: [],
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  editingTaskId: PropTypes.number,
  editingTaskText: PropTypes.string,
  setEditingTaskText: PropTypes.func.isRequired,
};
