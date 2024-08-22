import React from 'react';

import './taskList.css';
import PropTypes from 'prop-types';

import Task from '../task/task';

function TaskList({ tasks, onChange, onDelete, onEdit, onUpdate, editingTaskId, editingTaskText, setEditingTaskText }) {
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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  editingTaskId: PropTypes.number,
  editingTaskText: PropTypes.string.isRequired,
  setEditingTaskText: PropTypes.func.isRequired,
};

export default TaskList;
