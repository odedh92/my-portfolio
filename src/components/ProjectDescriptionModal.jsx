import React, { useState } from "react";

export const ProjectDescriptionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        <div>Description</div>
      </button>
      {isOpen && (
        <div>
          <div>This is the content of the pop-up.</div>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  );
};
