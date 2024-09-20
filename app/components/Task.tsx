"use client"; //need ask question about that 
import { Itask } from "@/types/task"
import React, { useState , FormEventHandler } from "react" 
import { FaEdit } from "react-icons/fa"; 
import { RiDeleteBin6Line } from "react-icons/ri";  
import Modal from "./Modal";  
import { useRouter } from "next/navigation"; // need to ask ediet by chatgpt 
import { DeletTODo, EdietTODo } from "@/api";

interface TaskPropse{
    task:Itask
}
const Task:React.FC<TaskPropse> = ({task}) => {  
  const router = useRouter(); 
  const [OpenModalEdait , SetModalEdait]= useState <boolean>(false);  
  const [OpenModalDelete, SetModalDelete]= useState <boolean>(false); 
  const [TaskToEdiet, SetTaskToEdiet]= useState<string> (task.text);  
  const handleEdiatTask:FormEventHandler<HTMLFormElement> = 
async (e) => { 
  e.preventDefault();  
 await EdietTODo({
  id:task.id , 
  text:TaskToEdiet 
 }); 

  SetTaskToEdiet(""); // Clear the input after submission
  SetModalEdait(false); // Close modal after submission
  router.refresh(); // Refresh the page or data after submission
}; 

const handelDeleteTask = async (id : string)=>{ 
  await DeletTODo(id); 
  SetModalDelete(false); 
  router.refresh(); 
 
}
  return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5"> 
      {/* why on onclick use arrow function */ }
    <FaEdit onClick={()=> SetModalEdait(true)} cursor=' pointer' className="text-blue-500" size={20}/> 
    <Modal MOdalOpen={OpenModalEdait} SetModalOpen={SetModalEdait}>
        <form onSubmit={handleEdiatTask}>
          <h3 className="font-bold text-lg">Ediet Task</h3>
          <div className="modal-action">
            <input
              value={TaskToEdiet}
              onChange={(e) => SetTaskToEdiet(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </Modal>
     
    <RiDeleteBin6Line onClick={()=>SetModalDelete(true)}       cursor=' pointer' className="text-red-500 " size={20}/> 
    <Modal MOdalOpen={OpenModalDelete} SetModalOpen={SetModalDelete}>
        <h3 className="text-lg">Are you sure ,  you want to delete this task ?</h3> 
        <div className="modal-action">  
          <button onClick={()=>{handelDeleteTask(task.id)}} className="btn btn-danger">yes</button>
          </div> 

      </Modal>
    </td>
  </tr>
  )
}

export default Task
