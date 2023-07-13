import React from "react";

const ErrorModal = ({ children }) => {
  return (
    <>
      <h3 className="text-sm font-semibold leading-7 text-gray-600">
        {children}
      </h3>
    </>
  );
};

export default ErrorModal;
