"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Heart } from "lucide-react";

interface HeaderProps {
  transparentLight?: boolean;
}

export default function Header({ transparentLight = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Monitor scroll for glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Bộ sưu tập", path: "/collection" },
    { name: "Liên hệ", path: "/contact" },
  ];

  // Inactive elements are white/light only when transparent AND transparentLight is false
  const isDarkHeaderState = !isScrolled && !transparentLight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background-warm/80 backdrop-blur-md border-b border-accent/10 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.svg"
                alt="Giấc Ngủ Êm"
                className="h-12 w-auto object-contain rounded shadow-sm bg-white/10"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-2 ${
                    isActive
                      ? "text-accent"
                      : isDarkHeaderState
                        ? "text-white/90 hover:text-accent"
                        : "text-primary hover:text-accent"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0978358654"
              className={`flex items-center space-x-2 font-medium hover:text-accent transition-colors duration-300 ${
                isDarkHeaderState ? "text-white/90" : "text-primary"
              }`}
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>0978.358.654</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-xs font-semibold uppercase tracking-wider rounded-md text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-md shadow-accent/15"
            >
              Gọi tư vấn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 transition-colors duration-300 ${
                isDarkHeaderState ? "text-white hover:text-accent" : "text-primary hover:text-accent"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background-warm/95 backdrop-blur-lg border-b border-accent/10 shadow-lg transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider ${
                    isActive
                      ? "text-accent bg-accent/5"
                      : "text-primary hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-accent/10 flex flex-col space-y-4 px-3">
              <a
                href="tel:0978358654"
                className="flex items-center space-x-3 text-primary font-semibold hover:text-accent transition-colors py-2"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span>0978.358.654</span>
              </a>
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 border border-transparent text-sm font-semibold uppercase tracking-wider rounded-md text-white bg-accent hover:bg-accent-hover shadow-md transition-all duration-300"
              >
                Tư vấn nhanh
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
