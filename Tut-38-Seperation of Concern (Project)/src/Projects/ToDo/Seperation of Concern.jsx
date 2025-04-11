import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";

export const Project4 = () => {
  const [task, setTask] = useState([]);

  // Lifting StateUp concept
  const handleFormSubmit = (event, inputValue) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      alert("The task is already written");
      setInputValue("");
      return; //  Stop execution if task exists
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    console.log(task);
    setInputValue(""); // Clear input field after adding
  };



  // Project 3: Deleting all the task at once
  function clearTask() {
    setTask([]);
  }

  // Project 3: Delete Single Task
  function handleDeleteToDo(clickedItem) {
    // It creates the new array by filtering(removing) the clicked one
    setTask((prevTask) => prevTask.filter((task) => task !== clickedItem));
  }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>

        {/*Project4: Seperating the components */}
        <ToDoDate />

        <TodoForm onFormSubmit={handleFormSubmit} />
        <ul>
          {task.map((currTask, index) => {
            return(
                <ToDoList onDeleteBtn={handleDeleteToDo} index={index} currTask={currTask} />
            )
          })}
        </ul>

        <span
          className="bg-red-400 text-slate-900 cursor-pointer"
          onClick={clearTask}
        >
          Clear All
        </span>
      </section>
    </>
  );
};
