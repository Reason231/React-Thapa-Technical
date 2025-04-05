import { useState } from "react";

export const StateManipulation = () => {
  const [task, setTask] = useState(["Task1", "Task2", "Task3"]);

  const handleAddTask = (addedTask) => {
    setTask([...task, addedTask]);
  };

  const handleDeleteTask = (deletedTask) => {
    setTask(task.filter((items) => items != deletedTask));
  };

  const handleUpdateTask=(prevTask,updatedTask)=>{
    setTask(task.map((items)=> 
    items == prevTask ? items = updatedTask : items = prevTask))
  }

  return (
    <>
      {task.map((items, index) => (
        <h1 key={index}>{items}</h1>
      ))}
      <div className="flex gap-6">
        <button onClick={() => handleAddTask(Math.random())}>Add Task</button>
        <button onClick={() => handleDeleteTask("Task3")}>Delete Task</button>
        <button
          onClick={() => handleUpdateTask("Task2", "UpdatedTask2")}
        >Update Task</button>
      </div>
    </>
  );
};
