import {GetAllToDo} from '@/api'
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";


export default async  function Home() {
 const task = await GetAllToDo(); 
 console.log(task); 
  return (
    <div>  
     <main className="max-w-4xl mx-auto mt-4">
    <div className="text-center my-5 flex flex-col gap-4"> 
     <h1 className="text-2xl font-bold">To do list App</h1> 

     <AddTask/> 
   
        </div> 
        <ToDoList tasks={task}/>
     </main>
    </div>
     
    
  );
}
