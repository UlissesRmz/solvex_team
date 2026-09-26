import "./Navbar.css";
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "transparent",
        borderBottom: "1px solid transparent",
        backdropFilter: "none",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              background: "rgb(17, 17, 16)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12L7 2L12 12"
                stroke="#F7F4EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 9h6"
                stroke="#F7F4EF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "18px",
              color: "rgb(17, 17, 16)",
              fontWeight: 500,
            }}
          >
            Solvex Tech
          </span>
        </a>

        {/* Desktop navigation */}
        <div
          id="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="desktop-nav"
        >
          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#services" className="nav-link">
            Services
          </a>

          <a href="#work" className="nav-link">
            Work
          </a>

          <a href="#process" className="nav-link">
            Process
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

          <a href="#contact" className="start-project">
            Start a Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "rgb(17, 17, 16)",
          }}
          className="mobile-menu-button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6h14M3 10h14M3 14h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="#contact"
            className="mobile-start-project"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}