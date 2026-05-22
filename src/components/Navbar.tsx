import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skin Layers", href: "/#skin-layers" },
  { label: "Finder", href: "/#finder" },
  { label: "Library", href: "/#library" },
  { label: "Quiz", href: "/#quiz" },
  { label: "Journal", href: "/blog", route: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="font-script text-2xl text-primary">The Skin Fix</Link>

        <div className="hidden md:flex gap-6">
          {links.map(l => (
            l.route ? (
              <Link key={l.href} to={l.href} className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide">
                {l.label}
              </a>
            )
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map(l => (
            l.route ? (
              <Link
                key={l.href} to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
