// фильтры в футере

import React, { Component } from 'react'
import '../tasksFilter/tasksFilter.css'
import PropTypes from 'prop-types'

export default class TasksFilter extends Component {
  render() {
    const { filter, setTaskFilter } = this.props
    return (
      <ul className="filters">
        <li>
          <button className={filter === 'all' ? 'selected' : ''} onClick={() => setTaskFilter('all')}>
            All
          </button>
        </li>

        <li>
          <button className={filter === 'active' ? 'selected' : ''} onClick={() => setTaskFilter('active')}>
            Active
          </button>
        </li>

        <li>
          <button className={filter === 'completed' ? 'selected' : ''} onClick={() => setTaskFilter('completed')}>
            Completed
          </button>
        </li>
      </ul>
    )
  }
}

TasksFilter.defaultProps = {
  filter: 'all',
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  setTaskFilter: PropTypes.func.isRequired,
}
