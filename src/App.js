import { useState } from "react";
import "./styles.css";
import Todo from "./todo";

export default function App() {
  const [todos, setTodos] = useState(["Say Hello"]);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <input
        value={value}
        onChange={function (event) {
          setValue(event.target.value);
        }}
      />

      <button
        onClick={function () {
          if (value == "") {
            return;
          }
          setTodos([...todos, value]);
          setValue("");
        }}
      >
        Add To Do
      </button>

      {todos.map(function (todo) {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}
