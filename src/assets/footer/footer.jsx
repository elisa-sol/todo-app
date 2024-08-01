// футер с информацией и кнопками

import { Component } from "react";
import "../footer/footer.css";
import TasksFilter from "../tasksFilter/tasksFilter.jsx";
import PropTypes from "prop-types";

export default class Footer extends Component {
  render() {
    const { taskCounter, clearCompletedTasks, setTaskFilter, filter } =
      this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{taskCounter} items left</span>

        <TasksFilter setTaskFilter={setTaskFilter} filter={filter} />

        <button
          type="button"
          className="clear-completed"
          onClick={() => clearCompletedTasks()}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.defaultProps = {
  taskCounter: 0,
  filter: "all",
};

Footer.propTypes = {
  taskCounter: PropTypes.number,
  clearCompletedTasks: PropTypes.func.isRequired,
  setTaskFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
