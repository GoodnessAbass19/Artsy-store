import React from "react";

const Bottom = () => {
  const today = new Date().getFullYear();
  return (
    <div className=" mt-4 md:mt-7 text-center">
      <p className="mt-4 md:mt-7 text-sm md:text-base text-neutral-400 font-semibold">
        Artsystudios © {today}. All rights reserved
      </p>
    </div>
  );
};

export default Bottom;
