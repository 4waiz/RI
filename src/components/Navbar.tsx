import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { capabilities } from "../data/capabilities";
import { industries } from "../data/industries";
import { Button } from "./Button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs uppercase tracking-[0.12em] transition-colors ${
    isActive ? "text-foreground" : "text-muted hover:text-foreground"
  }`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b bg-base/80 backdrop-blur">
      <div className="content-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-panel">
            <span className="font-display text-sm text-accent">R</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Rabana Industries</p>
            <p className="text-[10px] text-muted">Precision Manufacturing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div className="relative group">
            <NavLink to="/capabilities" className={navLinkClass}>
              <span className="flex items-center gap-1 py-2">
                Capabilities <FiChevronDown className="text-muted h-3 w-3" />
              </span>
            </NavLink>
            <div className="absolute left-0 top-full pt-2 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-[560px] translate-y-2 rounded-2xl border p-5 opacity-0 shadow-hard transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100" style={{ backgroundColor: 'var(--color-panel)' }}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent/70">
                    Capabilities
                  </p>
                  <div className="mt-3 space-y-2">
                    {capabilities.slice(0, 4).map((capability) => (
                      <Link
                        key={capability.id}
                        to="/capabilities"
                        className="flex items-start gap-2 rounded-lg border border-transparent p-2 transition hover:border-slate hover:bg-steel"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <div>
                          <p className="text-xs font-semibold">
                            {capability.title}
                          </p>
                          <p className="text-[10px] text-muted">
                            {capability.highlights[0]}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent/70">
                    Industries
                  </p>
                  <div className="mt-3 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.id}
                        to="/industries"
                        className="flex items-center justify-between rounded-lg border border-transparent p-2 transition hover:border-slate hover:bg-steel"
                      >
                        <div>
                          <p className="text-xs font-semibold">
                            {industry.name}
                          </p>
                          <p className="text-[10px] text-muted">
                            {industry.focus[0]}
                          </p>
                        </div>
                        <FiArrowUpRight className="text-accent h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <NavLink to="/industries" className={navLinkClass}>
            Industries
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/quality" className={navLinkClass}>
            Quality
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:flex">
          <Button to="/contact#quote" variant="outline" className="text-xs px-4 py-2">
            Request a Quote
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border bg-panel p-2 text-muted transition hover:text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <FiMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-80 p-6 shadow-hard"
              style={{ backgroundColor: 'var(--color-panel)' }}
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-muted">
                  Navigation
                </p>
                <button
                  className="rounded-full border p-2 text-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  <FiX />
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { label: "Home", to: "/" },
                  { label: "Capabilities", to: "/capabilities" },
                  { label: "Industries", to: "/industries" },
                  { label: "Projects", to: "/projects" },
                  { label: "Quality & Safety", to: "/quality" },
                  { label: "Careers", to: "/careers" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-base font-semibold transition ${
                        isActive ? "text-accent" : "text-muted"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-10">
                <Button to="/contact#quote" className="w-full">
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
