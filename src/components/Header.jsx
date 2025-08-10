import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass = isOpen
    ? "bg-transparent"
    : scrolled
    ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerBgClass}`}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

