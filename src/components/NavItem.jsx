import React from "react";

export default function NavItem({ item }) {
  return (
    <li className="text-neutralBlack font-medium cursor-pointer relative z-10 group md:text-white">
      <div
        className="absolute inset-0 -inset-x-1 -translate-y-1 opacity-0 duration-200 ease-in-out group-hover:opacity-50"
        style={{ boxShadow: "0px 5px 5px -5px white" }}
      ></div>
      {item}
    </li>
  );
}
