// форма для добавления

import { Component } from "react";
import "../newTaskForm/newTaskForm.css";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  render() {
    const { placeholder, newTask, handleInputChange, handleKeyPress } =
      this.props;
    return (
      <div>
        <input
          type="text"
          className="new-todo"
          placeholder={placeholder}
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    );
  }
}

NewTaskForm.defaultProps = {
  placeholder: "What needs to be done?",
};

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  newTask: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};
