import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
    
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos />
        <AddTodo/>
      </div>  
    );
  }
}

export default App;
