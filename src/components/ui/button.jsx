import React from "react";

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
