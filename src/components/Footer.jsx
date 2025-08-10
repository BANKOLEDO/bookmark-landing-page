import logoWhite from "../assets/logo-bookmark-white.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-7 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo and Nav */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#" className="flex items-center">
            <img src={logoWhite} alt="Bookmark" className="h-6" />
          </a>
          <nav className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 md:mt-0">
            <a href="#features" className="footer-text">Features</a>
            <a href="#pricing" className="footer-text">Pricing</a>
            <a href="#contact" className="footer-text">Contact</a>
          </nav>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6 mt-8 md:mt-0">
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
      </div>
    </footer>
  );
}