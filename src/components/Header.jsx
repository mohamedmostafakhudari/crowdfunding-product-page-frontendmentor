import React from "react";
import Nav from "./Nav";
import useWindowSize from "../hooks/useWindowSize";
export default function Header() {
  const { width } = useWindowSize();
  const backgroundStyle = {
    backgroundImage: `url("./assets/images/image-hero-${
      width < 768 ? "mobile" : "desktop"
    }.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <header className="min-h-[42vh] md:min-h-[50vh]" style={backgroundStyle}>
      <Nav />
    </header>
  );
}
