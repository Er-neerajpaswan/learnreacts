import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const expensiveCalculation = () => {
  console.log("Calculating...");
  let num = 0;
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function Register() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h1>Welcome</h1>

        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <hr />

      <div>
        Count: {count}
        <button onClick={increment}>+</button>

        <h2>Expensive Calculation</h2>
        {calculation}
      </div>

      <Link to="/user-list">Take me to user list screen</Link>
    </div>
  );
}

export default Register;
