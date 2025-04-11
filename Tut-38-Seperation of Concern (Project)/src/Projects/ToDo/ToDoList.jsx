import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({onDeleteBtn,index,currTask}) => {
  return (
    <>
    
          <li key={index} className="todo-item">
            <span>{currTask}</span>
            <button className="check-btn">
              <MdCheck />
            </button>

            {/* Project 3: Delete functionality */}
            <button
              className="delete-btn"
              onClick={() => onDeleteBtn(currTask)}
            >
              <MdDeleteForever />
            </button>
          </li>
       
    </>
  );
};
