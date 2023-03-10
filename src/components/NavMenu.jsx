import React from "react";
import NavItem from "./NavItem";
export default function NavMenu({ items, showMenu }) {
  return (
    <div
      className={`absolute ${showMenu && "bg-black/30"} inset-0 ${
        !showMenu && "pointer-events-none"
      }`}
    >
      <div
        className={`absolute left-6 right-6 bg-white duration-200 ease-in-out p-6 rounded-lg ${
          showMenu
            ? "translate-y-24 opacity-100 visible"
            : "-translate-y-20 opacity-0 invisible"
        }`}
      >
        <ul className="space-y-10">
          {items.map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
