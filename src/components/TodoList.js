import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";

const TodoList = () => {
  const todos = useSelector(getTodos);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
