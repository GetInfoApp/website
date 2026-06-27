import { Link } from "react-router-dom";
import { MapPin, Github } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3 hover:opacity-90 transition-opacity"
          >
            <Logo size={28} />
            Get Info
          </Link>
          <p className="text-sm text-muted-foreground mb-2">
            Community-powered local knowledge — in Hindi, Hinglish, or English.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
            <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
            Building in India
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/experts" className="hover:text-primary transition-colors">
                For Experts
              </Link>
            </li>
            <li>
              <Link to="/safety" className="hover:text-primary transition-colors">
                Trust & Safety
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Get Info. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
