import React from 'react'

import TaskEditing from './TaskEditing'

export default (props) => {
  if (props.todo.editing === true) {
    return <TaskEditing {...props} />
  }
  else
    return <Task {...props} />
}

const Task = ({ todo, onDeleteTask, onCompleteTask, activateEdit }) =>

  <div className='task-wrapper'>
    <button
      className={todo.completed ? "task-done-button task-done-button-state" : "task-done-button"}
      onClick={onCompleteTask.bind(null, todo.id)}
    ></button>

    <span className={todo.completed ? "task-name task-done" : "task-name"}
      onClick={activateEdit.bind(null, todo.id)}>
      {todo.task}
    </span>

    <button
      className='task-delete-button'
      onClick={onDeleteTask.bind(null, todo.id)}
    >
      -
    </button>
  </div>
