import { useState } from "react";

export const Form = () => {
  const [input, setInput] = useState({id:new Date(),content:"",isChecked:false});
  const [task, setTask] = useState([]);
  const [update,setUpdate]=useState([])

  function handleInput(value){
    setInput({id:new Date(),content:value,isChecked:false})
  }

  function handleTask(e) {
    if(!input) return

    e.preventDefault();
    setTask([...task, input]);
    setInput({id:"",content:"",isChecked:false});
  }

  function handleDelete(deletedTask){
    setTask(task.filter((filteredTask)=>{
       return filteredTask.content !== deletedTask
    })) 
  }

  function handleUpdate(updatedTask){
       const selectedTask=task.find((prevTask)=>prevTask.content == updatedTask)
  }

  function handleClearAll(){
    setTask([])
  }


  return (
    <>
      <form
        className="flex justify-center items-center h-screen flex-col gap-6"
        onSubmit={handleTask}
      >
        <div>
          <input
            type="text"
            className="border-2 border-red-400"
            onChange={(e) => handleInput(e.target.value)} 
            placeholder="Enter your task"
            value={input.content}
          />
          <button type="submit" className="cursor-pointer">Submit</button>
        </div>

          {task.map((currTask, index) => (
        <div key={index} className="border-2 rounded-md flex gap-4 flex-col p-4">
            <ul  >
              <li className="flex w-[45dvw] justify-evenly">
                <p className="border-2 border-yellow-300 w-[15dvw]">
                {currTask.content}
                </p>
                <button className="border-2 bg-blue-100" onClick={()=>handleUpdate(currTask.content)}>Update me</button>
                <button className="border-2 bg-blue-100" onClick={()=>handleDelete(currTask.content)}>Delete Me</button>
              </li>
            </ul>
        </div>
          ))}
      <button onClick={handleClearAll}>Clear All</button>
      </form>

    </>
  );
};
