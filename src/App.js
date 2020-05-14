import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  state = {
    todos: [
  {
    todo: 'walk the dog',
    completed: false
  },
  {
    todo: 'do laundry',
      completed: false
  },
  {
    todo: 'go grocery shopping',
      completed: false
  }
]
  };



  render() {
    return (
      <div className="App">
<ul>
{
  this.state.todos.map(task => <li key={task.todo}>
{task.todo}
</li>)
  }
</ul>
      </div>
    )
  }
}