import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  // { to: "/", label: "Home" },
  // { to: "/feed", label: "Feed" },
  // { to: "/api", label: "API" },
  // { to: "/safety", label: "Trust & Safety" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          Get Info
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link to="/ask">
            <Button size="sm" className="gradient-hero text-primary-foreground border-0">Ask a Question</Button>
          </Link>
        </div> */}

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-2 animate-slide-up">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">Log In</Button>
            </Link>
            <Link to="/ask" className="flex-1" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full gradient-hero text-primary-foreground border-0">Ask</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
