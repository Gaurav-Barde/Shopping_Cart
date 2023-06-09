import React from "react";

const Button = ({ title, onClickHandler, id, variant }) => {
  const bg = variant === "danger" ? "rose" : "lime";

  return (
    <button
      className={`bg-${bg}-500 hover:bg-${bg}-400 text-gray-700 font-bold py-2 px-4 border-b-4 my-4 border-${bg}-700 hover:border-${bg}-500 rounded`}
      onClick={() => onClickHandler(id)}
    >
      {title}
    </button>
  );
};

export default Button;
