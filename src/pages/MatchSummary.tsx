import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const matches = [
  { name: "Sara K.", distance: "0.2 mi", rating: 4.9, answers: 87, expertise: ["cafes", "downtown"], responseTime: "~2 min" },
  { name: "Jordan T.", distance: "0.5 mi", rating: 4.7, answers: 52, expertise: ["restaurants", "nightlife"], responseTime: "~5 min" },
  { name: "Kim W.", distance: "0.8 mi", rating: 4.5, answers: 34, expertise: ["parking", "transit"], responseTime: "~8 min" },
];

const MatchSummary = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="font-display text-2xl font-bold mb-2">Matched Helpers</h1>
      <p className="text-muted-foreground text-sm mb-6">3 people nearby can help with your question.</p>

      <div className="glass-card rounded-xl p-4 mb-6 bg-primary/5 border-primary/20">
        <p className="text-sm font-medium">"Where can I find a quiet cafe with Wi-Fi nearby?"</p>
        <div className="flex gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">cafe</Badge>
          <Badge variant="secondary" className="text-xs">wifi</Badge>
          <Badge className="bg-success/15 text-success text-xs">Safe</Badge>
        </div>
      </div>

      <div className="space-y-4">
        {matches.map((m, i) => (
          <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
              {m.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold">{m.name}</div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {m.distance}</span>
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-warning" /> {m.rating}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {m.answers}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {m.responseTime}</span>
              </div>
              <div className="flex gap-1 mt-2">
                {m.expertise.map((e) => <Badge key={e} variant="secondary" className="text-[10px]">{e}</Badge>)}
              </div>
            </div>
            <Link to="/chat">
              <Button size="sm" className="gradient-hero text-primary-foreground border-0">Chat</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default MatchSummary;
