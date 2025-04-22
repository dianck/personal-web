"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // pakai lucide-react (ikon modern)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    // "About",
    "What I Do",
    "Resume",
    // "Portfolio",
    "Client",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-indigo-600">
            <Link href="/">Dian CK</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="block text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
