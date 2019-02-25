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
      <div className="create-todo">
        <input
          placeholder='Enter the task'
          className='create-todo-input'
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.props.handleEnter.bind(null, this.state.inputValue)} />
        <button
          className="create-todo-button"
          type='submit' onClick={this.props.createTodo.bind(null, this.state.inputValue)}>+</button>
      </div>
    );
  }
}

export default CreateTodo
