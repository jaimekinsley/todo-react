import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

export default class App extends Component {

  state = {
    todos: [
  {
    id: 1,
    todo: 'walk the dog',
    completed: false
  },
  {
    id: 2,
    todo: 'do laundry',
    completed: false
  },
  {
    id: 3,
    todo: 'go grocery shopping',
    completed: false
  }
],
newTodo: ''
  };

componentDidMount = async() => {
  const fetchedData = await request.get('http://localhost:300/api/todo').set('Authorization', this.props.token)
  const data = fetchedData.body
  this.setState({ todos: data })
}

handleChange = (e) => {
  console.log(e.target.value);
  this.setState({ newTodo: e.target.value });
}

handleSubmit = (e) => {
  e.preventDefault();
  const newArrayOfTodos = this.state.todos.slice();

  // update to make a fetch to backend
  const fakeNewTodo = {
    id: Math.random(),
    todo: this.state.newTodo,
    completed: false
  };

newArrayOfTodos.push(fakeNewTodo);

this.setState({
  newTodo: '',
  todos: newArrayOfTodos
})

}

handleClick = (id) => {
  // I need to send an id to the backend later
}

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.newTodo} onChange={this.handleChange} />
        <button>add</button>
        </form>


      <ul>
      {
        this.state.todos.map(task => <li onClick={() => this.handleClick(task.id)} className={ task.completed ? 'complete' : 'incomplete'} key={JSON.stringify(task)}>
      {task.todo}
      </li>)
        }
      </ul>
            </div>
          )
        }
}