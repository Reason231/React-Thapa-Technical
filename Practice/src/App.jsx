
import { useState } from "react";
import {DateComponent} from "./DateComponent"
import { FormComponent } from "./FormComponent";
import { InputComponent } from "./InputComponent";



function App(){

  const getLocalStorageTodoData=()=>{
    const rawTodos = localStorage.getItem("datas")
  
      // If localStorage hasn't any data
      if(!rawTodos) return []
  
      // Converting JSON string data into object if the localStorage has the data
      return JSON.parse(rawTodos)
  }

  const [task,setTask]=useState(()=> getLocalStorageTodoData())
  localStorage.setItem("datas",JSON.stringify(task))


  function handleSubmitButton(inputedValue){
    const newTask=({
      id:new Date(),
      currData:inputedValue,
      isChecked:false
    })

    setTask([...task,newTask])
}


  function handleCheckBtn(checkedTask){
    const updatedTask=task.map((item)=>{
      if(item.currData == checkedTask){
        return{...item,isChecked:!item.isChecked}
      }
      else{
        return item
      }
    })

    setTask(updatedTask)
  }


  function handleDeleteBtn(deletedTask){
      setTask(prevTask=> prevTask.filter(item => item.currData !== deletedTask))
  }

  function clearData(){
    setTask([])
  }

  return(
    <>
    
    <div className="flex justify-center items-center h-screen flex-col bg-gradient-to-br from-[#001214] to-[#001f29] text-white">

      <h1>Todo List</h1>
      <DateComponent/>

      <InputComponent handleSubmitBtn={handleSubmitButton}/>
      
      <FormComponent taskData={task} handleDeleteBtn={handleDeleteBtn} handleCheckBtn={handleCheckBtn} />
   
      <button className="bg-red-500 mt-3 p-2 text-black" onClick={clearData}>Clear All</button>
    </div>
    </>
  )
}

export default App