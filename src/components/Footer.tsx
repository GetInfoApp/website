import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
            <div className="w-7 h-7 rounded-lg gradient-hero flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary-foreground" />
            </div>
            Get Info
          </Link>
          <p className="text-sm text-muted-foreground">Community-powered answers from the people around you.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/feed" className="hover:text-primary transition-colors">Feed</Link></li>
            <li><Link to="/ask" className="hover:text-primary transition-colors">Ask</Link></li>
            <li><Link to="/subscription" className="hover:text-primary transition-colors">Premium</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Developers</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {/* <li><Link to="/api" className="hover:text-primary transition-colors">API Docs</Link></li> */}
            <li><Link to="/safety" className="hover:text-primary transition-colors">Trust & Safety</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Privacy</Link></li>
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

