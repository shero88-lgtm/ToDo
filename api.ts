import { Itask } from "./types/task";

const BaseURL='http://localhost:3001'; 

export const GetAllToDo = async():Promise<Itask []> => { 
    const res = await fetch(`${BaseURL}/tasks`, {cache:'no-store'}); 
    const todoes= await res.json(); 
    return todoes; 


} 

export const AddTODo = async (todo: Itask): Promise<Itask> => {
    const res = await fetch(`${BaseURL}/tasks`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      // to convert json to string
      body: JSON.stringify(todo),
    });
  
    // Check if the response was unsuccessful
    if (!res.ok) {
      throw new Error(`Failed to add todo: ${res.statusText}`);
    }
  
    const newToDo: Itask = await res.json();
    
    // Return the newly created todo
    return newToDo;
  };  

  export const EdietTODo = async (todo: Itask): Promise<Itask> => { 
    const res = await fetch(`${BaseURL}/tasks/${todo.id}`, { 
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  
    if (!res.ok) {
      throw new Error(`Failed to update todo: ${res.statusText}`);  // Update error message for clarity
    }
  
    const UPtedToDo: Itask = await res.json();
    return UPtedToDo;
};  
 
// return void here mean return anything?
export const DeletTODo = async (id: string): Promise<void> => { 
   await fetch(`${BaseURL}/tasks/${id}`, { 
    method: "DELETE", 
   
  });

}; 


