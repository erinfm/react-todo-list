import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add a todo..."
          style={{ flex: '10', padding: '1rem', border: '3px solid #e1b12c' }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
