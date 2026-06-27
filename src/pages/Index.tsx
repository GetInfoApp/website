import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Shield, IndianRupee, MessageCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.png";

const steps = [
  {
    icon: MessageCircle,
    title: "Post your question",
    desc: "Tag it to your area. No account needed to browse; sign up to ask.",
  },
  {
    icon: Users,
    title: "Experts nearby get notified",
    desc: "Our system finds people with relevant local knowledge within seconds.",
  },
  {
    icon: Star,
    title: "Get a real answer, rate it",
    desc: "Only pay if the answer helps. Minimum ₹50 per accepted answer.",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Hyperlocal matching",
    desc: "Questions reach people in your pin code, not random strangers online.",
  },
  {
    icon: Star,
    title: "Answer ratings",
    desc: "Quality is accountable; bad answers don't get paid.",
  },
  {
    icon: Shield,
    title: "AI-powered safety",
    desc: "Auto-moderation blocks harmful content before it reaches anyone.",
  },
  {
    icon: IndianRupee,
    title: "Earn by answering",
    desc: "Experts earn ₹50+ per accepted answer. No subscription, no lock-in.",
  },
];

const WaitlistForm = ({
  label,
  onDark = false,
}: {
  label: string;
  onDark?: boolean;
}) => {
  const [contact, setContact] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    toast({
      title: "You're on the list.",
      description: "We'll notify you when Get Info launches in your city.",
    });
    setContact("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Email or phone number"
        className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button
        type="submit"
        size="lg"
        className={
          onDark
            ? "bg-card text-foreground hover:bg-card/90 whitespace-nowrap"
            : "gradient-hero text-primary-foreground border-0 whitespace-nowrap"
        }
      >
        {label}
      </Button>
    </form>
  );
};

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
            Hyperlocal knowledge platform
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Local knowledge that{" "}
            <span className="text-gradient">Google can't find</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ask your neighbourhood. Get answers from people who actually live
            there — in Hindi, Hinglish, or English.
          </p>
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm label="Get Early Access" />
          </div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Three simple steps from question to answer.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className={`text-center animate-slide-up-delay-${i + 1}`}>
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-sm font-semibold text-primary mb-1">
                Step {i + 1}
              </div>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Built for real India
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Designed around how people actually ask and answer questions.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group"
            >
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

    {/* Experts earn here */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <IndianRupee className="w-4 h-4" />
            For experts and local pros
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Answer questions. Get paid.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Share what you know about your city, your trade, your neighbourhood.
            Accepted answers earn ₹50 or more — directly to your UPI.
          </p>
          <WaitlistForm label="Join as an Expert" />
        </div>
      </div>
    </section>

    {/* Origin story */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Starting in India's tier-2 cities
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We're building Get Info from the ground up — places where the answer
            to "best mechanic near Laxmi Nagar" doesn't exist on Google. Join
            the founding community shaping how it works.
          </p>
        </div>
      </div>
    </section>

    {/* Trust & Safety */}
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Trust & Safety
            </h2>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Auto-moderation flags hate speech, threats, and drug-related
                content before posting — compliant with IT Act Section 79.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Every answer is tied to a verified account. No anonymous abuse.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Shape the future of local knowledge
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Be among the first community members in your city.
          </p>
          <WaitlistForm label="Get Early Access" onDark />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
