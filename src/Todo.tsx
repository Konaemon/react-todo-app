import React from 'react'

export const Todo = ({todo, toggleTodo}:any) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }


  return (
    <div className=''>
      <label>
        <input
        type='checkbox'
        checked={todo.completed}
        readOnly
        onChange={handleTodoClick}/>
      </label>
      {todo.name}
    </div>
  )
}
