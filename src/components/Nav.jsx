import React from "react";
import { useState } from "react";
import NavMenu from "./NavMenu";
import NavItem from "./NavItem";
const navItems = ["About", "Discover", "Get Started"];
export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="py-10">
      <div className="container mx-auto flex items-center justify-between px-5 md:px-20">
        <div>
          <div className="relative z-10">
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className="relative z-10 cursor-pointer"
          >
            {!showMenu && (
              <img src="./assets/images/icon-hamburger.svg" alt="menu" />
            )}
            {showMenu && (
              <img src="./assets/images/icon-close-menu.svg" alt="close" />
            )}
          </div>
          <NavMenu items={navItems} showMenu={showMenu} />
        </div>
        {/* desktop */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
