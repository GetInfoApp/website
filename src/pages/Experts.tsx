import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IndianRupee, MapPin, Star, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const perks = [
  { icon: IndianRupee, title: "Earn ₹50+ per answer", desc: "Get paid when your answer is accepted. Directly to your UPI account." },
  { icon: MapPin, title: "Your local knowledge has value", desc: "Know your city, your trade, your neighbourhood? That's exactly what we need." },
  { icon: Star, title: "Build your reputation", desc: "High ratings grow your visibility. Top experts get more questions." },
  { icon: Shield, title: "Safe platform", desc: "Every user is verified. Harmful content is blocked before it reaches you." },
];

const Experts = () => {
  const [contact, setContact] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    toast({
      title: "You're on the expert list.",
      description: "We'll reach out when we launch in your city.",
    });
    setContact("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <IndianRupee className="w-4 h-4" />
            For local experts
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Answer questions.<br />Get paid.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Share what you know about your city, your trade, your neighbourhood.
            Accepted answers earn ₹50 or more — directly to your UPI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {perks.map((p, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Join the expert waitlist</h2>
          <p className="text-muted-foreground mb-6">We'll notify you when Get Info launches in your city.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email or phone number"
              className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button type="submit" className="gradient-hero text-primary-foreground border-0 whitespace-nowrap">
              Join as Expert
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Experts;
