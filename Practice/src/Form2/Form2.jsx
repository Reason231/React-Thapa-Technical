import { useState } from "react";

export const Form2 = () => {
  const [input, setInput] = useState({
    id: new Date(),
    content: "",
    isChecked: false,
  });
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.content) return;

    setTask([...task, input]);

    setInput({
        id:new Date(),
        content:"",
        isChecked:false
    });
  };

  const handleInput = (inputValue) => {
    console.log(inputValue);
    setInput({
      id: new Date(),
      content: inputValue,
      isChecked: false,
    });
  };

  const handleUpdate=(updatedValue)=>{
    const value=task.map((currTask)=>{
        if(currTask.content.toLowerCase().includes(updatedValue.toLowerCase())){
            return {...currTask,isChecked:!currTask.isChecked}
        }
        else{
            return currTask
        }
    })

    setTask(value)
  }

  const handleDelete = (deletedValue) => {
    const updatedValue = task.filter(
      (filteredTask) => filteredTask.content !== deletedValue
    );
    setTask(updatedValue);
  };

  const handleClear = () => {
    setTask([]);
  };

  return (
    <div className="border-2 h-screen bg-blue-100 flex flex-col justify-center items-center">
      <form className="self-center" onClick={handleSubmit}>
        <h1>Form</h1>

        <div>
          <input
            type="text"
            className="border-2"
            onChange={(e) => handleInput(e.target.value)}
            value={input.content}
            placeholder="Enter your task"
          />
          <button>Submit</button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <ul>
            {task.map((currTask, index) => (
              <li className="flex justify-evenly gap-4" key={index}>
                <p className={currTask.isChecked ? "text-yellow-300" : "text-red-400"}>{currTask.content}</p>
                <button onClick={()=>{handleUpdate(currTask.content)}}>Update me</button>
                <button onClick={() => handleDelete(currTask.content)}>
                  Delete me
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
      <p onClick={handleClear}>Clear Button</p>
    </div>
  );
};
