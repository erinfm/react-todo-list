import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn about React',
        completed: false
      },
      {
        id: 2,
        title: 'Bake bread',
        completed: true
      },
      {
        id: 3,
        title: 'Answer emails',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
