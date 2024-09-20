import { Itask } from "@/types/task"; 
import Task from "./Task"; 

import React  from "react"
interface todolistPropse{
    tasks:Itask[]
}


const ToDoList:React.FC<todolistPropse> = ({tasks}) => {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map(task => ( <Task key={task.id} task={task} />
    ))}

   
   
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ToDoList
