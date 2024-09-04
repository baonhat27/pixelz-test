import React, { useState } from "react";
import "./App.css";
import SendCommentsModal from "./components/SendCommentsModal";
import "./global.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isShowAllUsers, setIsShowAllUsers] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleToggle = () => {
    setIsShowAllUsers((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container">
      <button className="saveCommentButton" onClick={openModal}>
        Send Comments
      </button>

      <SendCommentsModal
        isOpen={isModalOpen}
        isShowAllUsers={isShowAllUsers}
        onClose={closeModal}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
