"use client";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { AddTODo } from "@/api";
import { useRouter } from "next/navigation"; 


const AddTask = () => {
  const router = useRouter(); // Call useRouter correctly
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTextValue, setNewTextValue] = useState<string>("");

  const handleSubmitNewToDo: FormEventHandler<HTMLFormElement> = 
  async (e) => {
    e.preventDefault();
    
    // Assuming you have a correct payload here, update the task object
    await AddTODo({
      id: '3',
      text: newTextValue || 'learning',  // Use newTextValue from input
    });
    
    setNewTextValue(""); // Clear the input after submission
    setModalOpen(false); // Close modal after submission
    router.refresh(); // Refresh the page or data after submission
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task <CiCirclePlus size="20" />
      </button>

      {/* Pass modal state and setter */}
      <Modal MOdalOpen={modalOpen} SetModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewToDo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTextValue}
              onChange={(e) => setNewTextValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
