import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const mockFeed = [
  { id: 1, question: "Where can I find a quiet cafe with Wi-Fi nearby?", user: "Alex M.", location: "Downtown, 0.3 mi", time: "2m ago", answers: 3, rating: 4.8, urgency: "normal", tags: ["cafe", "wifi"] },
  { id: 2, question: "Any pharmacy open past midnight around here?", user: "Priya S.", location: "Midtown, 0.5 mi", time: "5m ago", answers: 1, rating: 5.0, urgency: "urgent", tags: ["pharmacy", "late-night"] },
  { id: 3, question: "Best place to park near the central library?", user: "Jordan T.", location: "Uptown, 1.2 mi", time: "12m ago", answers: 5, rating: 4.5, urgency: "normal", tags: ["parking"] },
  { id: 4, question: "Does anyone know a good dog-friendly park here?", user: "Sam L.", location: "Eastside, 0.8 mi", time: "18m ago", answers: 2, rating: 4.2, urgency: "normal", tags: ["dogs", "park"] },
  { id: 5, question: "Where's the nearest EV charging station?", user: "Kim W.", location: "Highway 101, 2 mi", time: "25m ago", answers: 4, rating: 4.9, urgency: "normal", tags: ["ev", "charging"] },
];

const Feed = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Nearby Feed</h1>
          <p className="text-muted-foreground text-sm mt-1">Questions from people around you</p>
        </div>
        <Link to="/ask">
          <Button className="gradient-hero text-primary-foreground border-0">+ Ask a Question</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {mockFeed.map((q) => (
          <div key={q.id} className="glass-card rounded-xl p-5 hover:shadow-elevated transition-all duration-300 cursor-pointer group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {q.urgency === "urgent" && <Badge className="bg-accent text-accent-foreground text-xs">Urgent</Badge>}
                  {q.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{q.question}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {q.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {q.time}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {q.answers} answers</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-warning" /> {q.rating}</span>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">{q.user}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Feed;
