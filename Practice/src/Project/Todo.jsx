import { useEffect, useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const todoKey="reactTodo"
  const [input, setInput] = useState({
    id: new Date(),
    content: "",
    checked: false,
  });
  const [task, setTask] = useState(()=>getLocalStorage());

  const [date, setDate] = useState("");


  // Local Storage
  function getLocalStorage(){
    const rawTodos=localStorage.getItem(todoKey)

    if(!rawTodos) return []

    return JSON.parse(rawTodos)
  }

  
  function setLocalStorage(){
    return localStorage.setItem(todoKey,JSON.stringify(task))
  }

  useEffect(()=>{
    setLocalStorage()
  },[task])


  // Handle Input 
  function handleInput(data) {
    setInput({ id: new Date(), content: data, checked: false });
  }


  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();

    if (!input.content) return;

    const ifToDoContentMatched = task.find(
      (currTask) => currTask.content === input.content
    );

    if (ifToDoContentMatched) {
      alert("The task is already written");
      setInput((prev) => ({
        ...prev,
        content: "",
      }));
      return; //  Stop execution if task exists
    }

    setTask((prev) => [...prev, input]);
    setInput((prev) => ({
      ...prev,
      content: "",
    }));
    console.log(task);
    setLocalStorage(task)
  }


  // Handle Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const dateInfo = new Date();
      const date = dateInfo.toLocaleDateString();
      const year = dateInfo.toLocaleTimeString();
      setDate(`${date}-${year}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // Handle Delete
  function handleDelete(deletedData){
    const nonDeletedTask=task.filter((data)=> data.content !=deletedData)
    setTask(nonDeletedTask)
  }

  function clearData(){
    setTask([])
  }


  // Handle Update
  function handleUpdate(updatedData){
    const updateTask=task.map((currTasks)=>{
      if(currTasks.content == updatedData){
        return {...currTasks,checked:!currTasks.checked}
      }
      else{
        return currTasks
      }
    })
    setTask(updateTask)
  }

  return (
    <>
      <div className="h-screen background text-white justify-center items-center flex flex-col ">
        <h1>Todo List</h1>
        <p>{date}</p>

        <form className="flex gap-1" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => handleInput(e.target.value)}
            value={input.content}
            className="text-black"
          />
          <button className="bg-blue-400">Add Task</button>
        </form>

        <section>
          {task.map((currTask) => (
            <div className="flex gap-2" key={currTask.id}>
              <p className={`${currTask.checked ? "bg-green-500" : "bg-yellow-400"}`}>{currTask.content}</p>
              <button onClick={()=>handleUpdate(currTask.content)}>Update</button>
              <button onClick={()=>handleDelete(currTask.content)}>Delete</button>
            </div>
          ))}
        </section>

        <section>
          <button className="bg-red-400 text-black" onClick={clearData}>Clear All</button>
        </section>
      </div>
    </>
  );
};
