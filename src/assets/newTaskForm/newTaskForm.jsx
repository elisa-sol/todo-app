// форма для добавления

import React from 'react';

import './newTaskForm.css';
import PropTypes from 'prop-types';

function NewTaskForm({ newTask, handleInputChange, handleKeyPress }) {
  return (
    <div>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

NewTaskForm.propTypes = {
  newTask: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default NewTaskForm;
