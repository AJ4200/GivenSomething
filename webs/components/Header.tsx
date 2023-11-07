import classnames from "classnames";
import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className={classnames(
        "fixed w-[95%] top-0 text-center border-[1rem]",
        "border-black bg-slate-50/80 h-20"
      )}
      style={{
        transform: "skew(-20deg)",
      }}
    >
      <h1 className="text-4xl mt-2">GivenSomethingWebs</h1>
    </header>
  );
};
export default Header;
