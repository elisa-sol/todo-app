//одна задача

import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import "../task/task.css";
import PropTypes from "prop-types";

export default class Task extends Component {
  render() {
    const {
      task,
      onChange,
      onDelete,
      onEdit,
      onUpdate,
      isEditing,
      editingText,
      setEditingTaskText,
    } = this.props;
    return (
      <li
        className={`${isEditing ? "editing" : ""} ${task.checked ? "completed" : ""}`}
      >
        <div className="view">
          <input
            id={`task-${task.id}`}
            className="toggle"
            type="checkbox"
            onChange={(event) => onChange(task.id, event.target.checked)}
            checked={task.checked}
          />

          <label htmlFor={`task-${task.id}`}>
            <span className="description">{task.text}</span>
            <span className="created">
              {`created ${formatDistanceToNow(new Date(task.date), {
                includeSeconds: true,
                locale: enUS,
                addSuffix: true,
              })}`}
            </span>
          </label>

          <button
            type="button"
            className="icon icon-edit"
            onClick={() => onEdit(task.id, task.text)}
          ></button>

          <button
            type="button"
            className="icon icon-destroy"
            onClick={() => onDelete(task.id)}
          ></button>
        </div>

        {isEditing && (
          <input
            className="edit"
            type="text"
            value={editingText}
            onChange={(e) => setEditingTaskText(e.target.value)}
            onBlur={() => onUpdate(task.id, editingText)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdate(task.id, editingText);
              }
            }}
          />
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  task: {},
};

Task.propTypes = {
  task: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  editingText: PropTypes.string,
  setEditingTaskText: PropTypes.func.isRequired,
};
