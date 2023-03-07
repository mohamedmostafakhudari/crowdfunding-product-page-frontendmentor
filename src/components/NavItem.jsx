import React from "react";

export default function NavItem({ item }) {
  return (
    <li className="text-neutralBlack font-medium cursor-pointer md:text-white">
      {item}
    </li>
  );
}
