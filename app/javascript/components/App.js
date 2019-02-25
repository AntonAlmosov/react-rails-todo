import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import Tasks from './Tasks';
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos
    }
  }

  componentWillMount() {
    console.log(this.state.todos)
  }

  componentDidUpdate() {
    console.log(this.state.todos)
  }

  render() {
    return (
      <div className="todo-wrapper">
        <CreateTodo
          handleEnter={this.createTaskOnEnter}
          createTodo={this.createTask} />
        <Tasks todosList={this.state.todos}
          onDeleteTask={this.deleteTask}
          onCompleteTask={this.completeTask}
          onEdit={this.editTask}
          activateEdit={this.activateEdit} />
      </div>
    )
  }

  createTask = (value) => {
    if (value !== "") {
      const newTask = {
        id: uuid.v4(),
        task: value,
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTask]
      })
    }
  }

  createTaskOnEnter = (value, e) => {
    if (e.key === 'Enter') {
      this.createTask(value)
      e.target.value = '';
    }
  }

  deleteTask = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  editTask = (id, e) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          return {
            id: todo.id,
            task: e.target.value,
            completed: todo.completed,
            editing: false
          }
        return todo
      })
    })
  }

  completeTask = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id && !todo.completed)
          return {
            id: todo.id,
            task: todo.task,
            completed: true
          }
        else if (todo.id === id)
          return {
            id: todo.id,
            task: todo.task,
            completed: false
          }
        return todo
      })
    })
  }

  activateEdit = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.editing = true;
        }
        return todo;
      })
    })
  }
}

export default App;
