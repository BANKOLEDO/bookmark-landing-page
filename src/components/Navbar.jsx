import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-bookmark.svg";
import logoFullWhite from "../assets/logo-bookmark-fullwhite.svg";
import menuIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

export default function Navbar({ isOpen, setIsOpen }) {
  // Close menu on resize if >= md breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  const navLinks = [
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  // Custom smooth scroll with header offset
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const target = document.getElementById(id);

    if (target) {
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="container-custom py-6 flex justify-between items-center">
      {/* Logo */}
      <img src={logo} alt="Bookmark" className="h-6" />

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-10 font-rubik text-blue-950 uppercase tracking-wide text-sm">
        {navLinks.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="hover:text-red-400 cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <button className="bg-red-400 text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">
            Login
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <img src={menuIcon} alt="Open Menu" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-950 bg-opacity-95 z-50 text-white flex flex-col h-[100vh] overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center px-6 py-6">
              <img src={logoFullWhite} alt="Bookmark" className="h-6" />
              <button onClick={() => setIsOpen(false)}>
                <img src={closeIcon} alt="Close Menu" />
              </button>
            </div>

            {/* Overlay Links */}
            <ul className="flex flex-col items-center gap-6 mt-10 text-lg uppercase tracking-wide">
              {navLinks.map(({ id, label }) => (
                <motion.li
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer hover:text-red-400"
                >
                  <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                    {label}
                  </a>
                </motion.li>
              ))}
              <li>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-400 text-white px-20 py-2 rounded-md shadow hover:opacity-90 transition"
                >
                  Login
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
