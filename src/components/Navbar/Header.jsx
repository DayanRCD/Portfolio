import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">ANSDEV</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors">
            À propos
          </Link>
          <Link
            to="/competence"
            className="hover:text-indigo-600 transition-colors"
          >
            Compétence
          </Link>
          <Link
            to="/contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* GitHub (toujours visible) */}
        <div className="hidden md:block">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <Link
              to="/"
              className="hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/competence"
              className="hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              Compétence
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
