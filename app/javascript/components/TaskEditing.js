import React from 'react'

const TaskEditing = ({ todo, onEdit }) =>

  <div className='task-wrapper'>
    <button
      className={todo.completed ? "task-done-button task-done-button-state" : "task-done-button"}></button>
    <input
      className='task-editing'
      defaultValue={todo.task}
      onBlur={onEdit.bind(null, todo.id)}
      autoFocus={true}
    />
    <button className='task-delete-button'>
      -
    </button>
  </div>

export default TaskEditing
