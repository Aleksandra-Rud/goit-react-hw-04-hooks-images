// import React, { Component } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClick, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
