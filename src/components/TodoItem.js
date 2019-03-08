import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '1rem',
      borderBottom: '2px solid #ccc ',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  checkboxStyle = () => {
    return {
      marginRight: '1rem'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" style={this.checkboxStyle()} onChange={this.markComplete} />
          {this.props.todo.title}</p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
