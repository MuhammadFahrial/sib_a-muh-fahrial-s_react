import React from "react";
import { useState, useEffect } from "react";

export default function Halu() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 20)));
  });

  return (
    <div>
      <table className="table">
        <tbody>
          {todos.map((todo, index) => {
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.complete ? "v" : "x"}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
