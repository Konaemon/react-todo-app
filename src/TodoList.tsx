import React from 'react';
import { Todo } from './Todo';

const TodoList = ({ todos, toggleTodo }: any) => {
  return (
    <>
      {todos.map((todo: any) => (
        // 各todoに対する処理を記述
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
      ))}
    </>
  );
};

export default TodoList;