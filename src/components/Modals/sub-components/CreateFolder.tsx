import React, { useState, useEffect, useRef } from "react";

interface CreateFolderModalProps {
  show: boolean;
  handleClose: () => void;
  handleCreate: (folderName: string) => void;
}

const CreateFolder: React.FC<CreateFolderModalProps> = ({
  show,
  handleClose,
  handleCreate,
}) => {
  const [folderName, setFolderName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on the input when the modal is shown
  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  // Handle keydown events for Escape and Enter
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseModal();
      } else if (e.key === "Enter") {
        if (folderName.trim()) {
          e.preventDefault();
          handleSubmit();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on unmount or when modal is hidden
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, folderName]);

  // Handle form submission
  const handleSubmit = () => {
    handleCreate(folderName.trim());
    setFolderName("");
    handleClose();
  };

  // Handle modal close and clear the input
  const handleCloseModal = () => {
    setFolderName("");
    handleClose();
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null; // Do not render the modal if it's not shown

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${show ? 'block' : 'hidden'}`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          <div className="p-4 text-white bg-blue-600 rounded-t-lg">
            <h5 className="text-lg font-semibold">Create New Folder</h5>
            <button
              type="button"
              className="absolute top-0 right-0 p-2 text-white"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label htmlFor="formFolderName" className="block mb-1 font-bold">
                Folder Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                id="formFolderName"
                placeholder="Enter folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                ref={inputRef}
                onKeyDown={(e) => {
                  // Prevent form submission on Enter within the input
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (folderName.trim()) {
                      handleSubmit();
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="flex justify-end p-4 space-x-2">
            <button
              type="button"
              className="px-4 py-2 font-semibold text-black bg-gray-300 rounded-lg hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
              onClick={handleSubmit}
              disabled={!folderName.trim()}
            >
              <i className="bi bi-folder-plus"></i> Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFolder;
