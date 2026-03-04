import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Shield, Star, Users, Zap, Brain, Crown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const steps = [
  { icon: MessageCircle, title: "Ask", desc: "Post a real-world question with your location context." },
  { icon: Brain, title: "AI Improve & Safety", desc: "Your question is refined and checked for safety automatically." },
  { icon: Users, title: "Nearby Match", desc: "Matched helpers nearby get notified and respond in real time." },
];

const features = [
  { icon: MapPin, title: "Live Nearby Feed", desc: "See questions from people around you in real time." },
  { icon: MessageCircle, title: "In-App Chat", desc: "Chat directly with matched helpers securely." },
  { icon: Star, title: "Answer Ratings", desc: "Rate answers to build trust and surface top helpers." },
  { icon: Users, title: "Profiles", desc: "Build your reputation as a helpful community member." },
  { icon: Crown, title: "Premium", desc: "Priority matching, unlimited questions, analytics." },
  { icon: Shield, title: "Safety First", desc: "AI moderation blocks unsafe content before it reaches anyone." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-36 text-center">
        <div className="animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Location-based community help
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Get answers from <span className="text-gradient">real people</span> nearby
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ask real-world questions and get matched with nearby community members who can help — powered by AI safety and smart matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ask">
              <Button size="lg" className="gradient-hero text-primary-foreground border-0 px-8 text-base">
                <Zap className="w-5 h-5 mr-2" /> Ask a Question
              </Button>
            </Link>
            <Link to="/feed">
              <Button size="lg" variant="outline" className="px-8 text-base">Explore Feed</Button>
            </Link>
            {/* <Link to="/api">
              <Button size="lg" variant="ghost" className="px-8 text-base">View API â†’</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">Three simple steps from question to answer.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className={`text-center animate-slide-up-delay-${i + 1}`}>
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-sm font-semibold text-primary mb-1">Step {i + 1}</div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need</h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">A complete platform for community-powered local knowledge.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to get answers?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join thousands of community members helping each other every day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ask">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 px-8">Get Started Free</Button>
            </Link>
            {/* <Link to="/api">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">Explore API</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;


