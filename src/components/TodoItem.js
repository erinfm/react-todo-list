import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f5f6fa',
      padding: '1rem 1.5rem',
      borderBottom: '2px solid #dcdde1 ',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" style={checkboxStyle} onChange={this.props.markComplete.bind(this, id)} />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>&#10006;</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const checkboxStyle = {
  marginRight: '1rem'
}

const btnStyle = {
  background: '#e84118',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
