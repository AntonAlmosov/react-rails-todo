import React from 'react'

class CreateTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ""
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <form action='/todo/new' className="create-todo" data-remote='true'>
        <input
          name='task'
          placeholder='Enter the task'
          className='create-todo-input'
          type="text"
          onChange={this.handleChange}
           />
        <input
          className="create-todo-button"
          type='submit' onClick={this.props.createTodo.bind(null, this.state.inputValue)} />
      </form>
    );
  }
}

export default CreateTodo
