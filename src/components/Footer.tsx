import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-panel/60">
      <div className="content-container grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl">Rabana Industries</h3>
          <p className="mt-4 text-sm text-muted">
            Precision manufacturing and engineered services for mission-critical
            systems. Built for durability, traceable quality, and on-time
            delivery.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted/70">
            ISO-aligned quality systems · Safety-first culture · 24/7 support
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
            Navigate
          </p>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <Link to="/capabilities" className="hover:text-accent transition-colors">Capabilities</Link>
            <Link to="/industries" className="hover:text-accent transition-colors">Industries</Link>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link to="/quality" className="hover:text-accent transition-colors">Quality & Safety</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Abu Dhabi, UAE</p>
            <p>050-475-4950</p>
            <a href="mailto:awaiz42ad@gmail.com" className="block hover:text-accent transition-colors">
              awaiz42ad@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="content-container flex flex-col items-center justify-between gap-4 text-xs text-muted/70 md:flex-row">
          <span>© 2025 Rabana Industries. All rights reserved.</span>
          <span>
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/awaiz-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accentGlow transition-colors"
            >
              Awaiz Ahmed
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
