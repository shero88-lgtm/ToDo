import React from "react";
interface ModalProps {
  MOdalOpen: boolean;
  SetModalOpen: (open: boolean) => void;
  children:React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ MOdalOpen, SetModalOpen , children }) => {
  return (
    <dialog open={MOdalOpen} className="modal">
      <div className="modal-box">
        <button
          type="button"
          onClick={() => SetModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
