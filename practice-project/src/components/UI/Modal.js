import React from "react";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  const closeModalHandler = () => {
    props.onClose();
  };

  return (
    <>
      <div className="modal" onClick={closeModalHandler}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Error</h4>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">
            <button className="button" onClick={closeModalHandler}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
