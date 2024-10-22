"use client";

import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState<string[]>([]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask("");
    }
  };

  const handleDelete = (index: number) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-do List in Next.js</h1>
      <form onSubmit={inputSubmit}>
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
