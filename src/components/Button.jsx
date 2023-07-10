import React from "react";

const Button = ({ title, onClickHandler, id, variant, background }) => {
  const bg = background ? background : variant === "danger" ? "rose" : "lime";

  return (
    <button
      className={`bg-${bg}-600 hover:bg-${bg}-400 text-slate-100 font-bold py-2 px-4 border-b-4 my-4 border-${bg}-700 hover:border-${bg}-500 rounded`}
      onClick={() => (id ? onClickHandler(id) : onClickHandler())}
    >
      {title}
    </button>
  );
};

export default Button;
