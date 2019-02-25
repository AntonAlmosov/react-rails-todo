import React from 'react';
// import Note from './Note'

import Task from './Task'

const Tasks = (props) =>

  <div>
    {props.todosList.map(todo =>
      <Task key={todo.id} todo={todo}
        onDeleteTask={props.onDeleteTask}
        onCompleteTask={props.onCompleteTask}
        onEdit={props.onEdit}
        activateEdit={props.activateEdit} />
    )}
  </div>



export default Tasks
