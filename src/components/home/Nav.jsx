import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top navbar */}
      <div className="flex items-center justify-between h-12 w-full bg-[#213448] text-white shadow-2xl shadow-[#EAE0CF] px-4 md:px-10">
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Centered logo on mobile, left on md+ */}
        <span className="text-white font-bold flex-1 text-center md:text-left">
          BTEUP
        </span>

        {/* Desktop links */}
        <span className="hidden md:flex justify-end gap-6">
          <p>Notes</p>
          <p>PYQ&apos;S</p>
          <p>Contact us</p>
          <p>About Us</p>
        </span>
      </div>

      {/* Mobile overlay + side drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#213448] text-white z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-12 px-4 border-b border-white/20">
          <span className="font-bold">BTEUP</span>
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-4 py-6">
          <button onClick={() => setOpen(false)} className="text-left">
            Notes
          </button>
          <button onClick={() => setOpen(false)} className="text-left">
            PYQ&apos;S
          </button>
          <button onClick={() => setOpen(false)} className="text-left">
            Contact us
          </button>
          <button onClick={() => setOpen(false)} className="text-left">
            About Us
          </button>
        </nav>
      </div>
    </>
  );
};

export default Nav;
