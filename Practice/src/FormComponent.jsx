import { useState } from "react";
import { FaCheck} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const FormComponent=({taskData,handleDeleteBtn,handleCheckBtn})=>{

    return(
        <>
        {taskData.map((arrList,index)=>(
    <div className="flex mt-4 items-center h-10 bg-white w-[221px] justify-between p-5 rounded-xs" key={index}>
    <span className={`text-black ${arrList.isChecked ? "line-through":""}`}>{arrList.currData}</span>
    <button className={`text-black h-11 cursor-pointer`} onClick={()=>handleCheckBtn(arrList.currData)}>
      <FaCheck />
      </button >
    <button className="text-black h-11 cursor-pointer" onClick={()=>handleDeleteBtn(arrList.currData)}>
      <MdDeleteForever />
      </button>
    </div>
  ))}
        </>
    )
}
