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
                  className="border-2 border-white text-white px-20 py-2 rounded-md shadow hover:opacity-90 transition"
                >
                  LOGIN
                </motion.button>
              </li>
               {/* Social Icons */}
        <div className="flex gap-6 mt-60 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-red-500 transition">
            <svg width="24" height="24" fill="currentColor">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-red-500 transition">
            <svg width="24" height="24" fill="currentColor">
              <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.86-2.72 1.05a4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.93-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.49-.02-.73-.07a4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 4.59a8.56 8.56 0 0 1-2.54.7z"/>
            </svg>
          </a>
        </div>
            </ul>
        
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
