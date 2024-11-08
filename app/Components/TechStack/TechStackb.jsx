import React from "react";

const TechStack = ({ url, name }) => {
  return (
    <div className="flex items-center sm:px-[0.45rem] sm:py-[0.1rem] xss:px-[0.41rem] xss:py-[0.085rem] hover:bg-[#242424] bg-[#161616] rounded-md">
      <img
        src={`/${url}`}
        alt={name}
        className="unselectable object-cover mr-[0.45rem] sm:w-[17.5px] sm:h-[17.5px] w-[15px] h-[15px]"
      />
      <p className="unselectable sm:text-base xss:text-sm">{name}</p>
    </div>
  );
};

export default TechStack;
