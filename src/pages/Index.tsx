import { useState } from "react";
import Layout from "@/components/Layout";
import { row1QA, row2QA } from "@/data/carouselQuestions";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Star,
  Shield,
  IndianRupee,
  MessageCircle,
  Users,
  CheckCircle,
  HelpCircle,
  Lock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    icon: MessageCircle,
    title: "Post your question",
    desc: "Tag it to your area. No account needed to browse; sign up to ask.",
  },
  {
    icon: Users,
    title: "People near that location get notified",
    desc: "Our system finds people near the pinned location and notifies them within seconds.",
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

const faqs = [
  {
    q: "Is Get Info free to use?",
    a: "Browsing and asking is free. You only pay when you accept an answer that helped you — minimum ₹50, paid directly to the person who answered.",
  },
  {
    q: "How do people earn by answering?",
    a: "When your answer is accepted by the asker, you earn ₹50 or more, sent directly to your UPI. No subscription, no joining fee.",
  },
  {
    q: "Which cities is Get Info available in?",
    a: "We're launching first in India's tier-2 and tier-3 cities. Join the waitlist and we'll notify you when we go live in your area.",
  },
  {
    q: "What kind of questions can I ask?",
    a: "Anything tied to a place — is a shop open, how long is the queue, is something available nearby, can someone help right now. You pin a location, set a radius, and ask.",
  },
  {
    q: "Is my location private?",
    a: "You choose the location you pin for each question — it doesn't have to be where you are. Precise location isn't stored beyond the active question.",
  },
  {
    q: "What languages are supported?",
    a: "Ask and answer in Hindi, Hinglish, or English — whatever feels natural.",
  },
  {
    q: "How does Get Info keep things safe?",
    a: "Every question passes through AI moderation that blocks hate speech, threats, and harmful content before it reaches anyone. Every account is verified.",
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

const SectionEyebrow = ({ label }: { label: string }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
    {label}
  </p>
);

const Index = () => (
  <Layout>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid dot pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
              <circle cx="22" cy="22" r="1.5" fill="hsl(168, 65%, 32%)" fillOpacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
        {/* Ambient blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(22 90% 55% / 0.05)" }}
        />
        {/* Floating map-pin outlines */}
        <svg
          className="absolute top-16 right-[28%] w-7 h-9 opacity-10 hidden md:block"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 110 C46 98 16 72 16 44 A34 34 0 1 1 84 44 C84 72 54 98 50 110 Z"
            stroke="hsl(168,65%,32%)"
            strokeWidth="6"
          />
        </svg>
        <svg
          className="absolute bottom-24 left-[12%] w-5 h-6 opacity-10"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 110 C46 98 16 72 16 44 A34 34 0 1 1 84 44 C84 72 54 98 50 110 Z"
            stroke="hsl(22,90%,55%)"
            strokeWidth="6"
          />
        </svg>
        <svg
          className="absolute top-1/3 left-[6%] w-4 h-5 opacity-10 hidden md:block"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 110 C46 98 16 72 16 44 A34 34 0 1 1 84 44 C84 72 54 98 50 110 Z"
            stroke="hsl(168,65%,32%)"
            strokeWidth="6"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="animate-slide-up flex-1 min-w-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Real people. Real answers. Near you.
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Ask anything.{" "}
              <span className="text-gradient">Get answered.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0">
              Ask anything. Get matched with people nearby who actually know —
              right now, in Hindi, Hinglish, or English.
            </p>
            <div
              id="waitlist"
              className="flex flex-col items-center md:items-start gap-4 scroll-mt-20"
            >
              <WaitlistForm label="Get Early Access" />
            </div>
          </div>

          {/* Phone mockup — desktop only, with glow halo */}
          <div className="hidden md:flex flex-shrink-0 w-52 lg:w-60 items-center justify-center relative">
            {/* Soft glow behind phone */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-125"
              style={{ background: "var(--gradient-hero)" }}
            />
            <svg
              viewBox="0 0 200 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 w-full drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="phone-gi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(168,65%,32%)" />
                  <stop offset="100%" stopColor="hsl(22,90%,55%)" />
                </linearGradient>
              </defs>
              {/* Phone body */}
              <rect x="3" y="3" width="194" height="374" rx="26" fill="white" />
              <rect x="3" y="3" width="194" height="374" rx="26" stroke="url(#phone-gi-grad)" strokeWidth="3" />
              {/* Status bar */}
              <rect x="20" y="18" width="80" height="5" rx="2.5" fill="#e2e8f0" />
              <rect x="162" y="18" width="18" height="5" rx="2.5" fill="#e2e8f0" />
              {/* Question card */}
              <rect x="14" y="40" width="172" height="72" rx="12" fill="#f0fdf8" stroke="hsl(168,65%,32%)" strokeOpacity="0.2" strokeWidth="1" />
              <circle cx="30" cy="58" r="9" fill="hsl(168,65%,32%)" fillOpacity="0.18" />
              <rect x="46" y="52" width="90" height="7" rx="3.5" fill="#94a3b8" />
              <rect x="46" y="64" width="70" height="5" rx="2.5" fill="#cbd5e1" />
              <rect x="18" y="80" width="115" height="5" rx="2.5" fill="#cbd5e1" />
              <rect x="18" y="90" width="82" height="5" rx="2.5" fill="#e2e8f0" />
              {/* Location badge */}
              <rect x="14" y="122" width="94" height="22" rx="11" fill="hsl(168,65%,32%)" fillOpacity="0.1" />
              <rect x="24" y="127" width="74" height="12" rx="6" fill="hsl(168,65%,32%)" fillOpacity="0.25" />
              {/* Answer card */}
              <rect x="14" y="154" width="172" height="84" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="24" y="167" width="105" height="7" rx="3.5" fill="#64748b" />
              <rect x="24" y="180" width="125" height="5" rx="2.5" fill="#94a3b8" />
              <rect x="24" y="190" width="95" height="5" rx="2.5" fill="#cbd5e1" />
              {/* Star ratings */}
              <rect x="24" y="202" width="9" height="9" rx="2" fill="hsl(22,90%,55%)" fillOpacity="0.85" />
              <rect x="36" y="202" width="9" height="9" rx="2" fill="hsl(22,90%,55%)" fillOpacity="0.85" />
              <rect x="48" y="202" width="9" height="9" rx="2" fill="hsl(22,90%,55%)" fillOpacity="0.85" />
              <rect x="60" y="202" width="9" height="9" rx="2" fill="hsl(22,90%,55%)" fillOpacity="0.85" />
              <rect x="72" y="202" width="9" height="9" rx="2" fill="#e2e8f0" />
              {/* Earn badge */}
              <rect x="14" y="250" width="172" height="38" rx="12" fill="hsl(22,90%,55%)" fillOpacity="0.08" />
              <rect x="28" y="261" width="52" height="8" rx="4" fill="hsl(22,90%,55%)" fillOpacity="0.4" />
              <rect x="92" y="263" width="80" height="5" rx="2.5" fill="#e2e8f0" />
              {/* Bottom nav */}
              <rect x="14" y="302" width="172" height="54" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <circle cx="58" cy="327" r="6" fill="hsl(168,65%,32%)" fillOpacity="0.9" />
              <circle cx="100" cy="327" r="6" fill="#e2e8f0" />
              <circle cx="142" cy="327" r="6" fill="#e2e8f0" />
              {/* Home indicator */}
              <rect x="75" y="366" width="50" height="4" rx="2" fill="#e2e8f0" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    {/* ── Questions carousel ────────────────────────────────────────────── */}
    <section className="py-14 overflow-hidden border-y border-border/40 bg-muted/30">
      <div className="mb-3 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Real questions people are asking
        </span>
      </div>
      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-3">
        <div className="carousel-track-left">
          {[...row1QA, ...row1QA].map((qa, i) => (
            <div key={i} className="flex-shrink-0 glass-card rounded-xl p-4 w-72 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground leading-snug">{qa.question}</p>
              </div>
              <div className="flex items-start gap-2 pl-1">
                <div className="w-5 h-5 rounded-full gradient-hero flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Users className="w-3 h-3 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-snug italic">{qa.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="carousel-track-right">
          {[...row2QA, ...row2QA].map((qa, i) => (
            <div key={i} className="flex-shrink-0 glass-card rounded-xl p-4 w-72 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground leading-snug">{qa.question}</p>
              </div>
              <div className="flex items-start gap-2 pl-1">
                <div className="w-5 h-5 rounded-full gradient-hero flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Users className="w-3 h-3 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-snug italic">{qa.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── How it works ─────────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionEyebrow label="HOW IT WORKS" />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto">
            Three simple steps from question to answer.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal connector line */}
          <div className="hidden md:block absolute top-[2.75rem] left-[22%] right-[22%] h-0 border-t-2 border-dashed border-primary/20 z-0" />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 text-center ring-1 ring-border/40 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 animate-slide-up-delay-${i + 1} relative z-10`}
              >
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
      </div>
    </section>

    {/* ── Features ─────────────────────────────────────────────────────── */}
    <section
      className="py-20 md:py-28 border-t border-border/40"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(168 65% 32% / 0.04) 0%, transparent 65%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionEyebrow label="FEATURES" />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Built for real India
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto">
            Designed around how people actually ask and answer questions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 group relative ring-1 ring-border/30"
            >
              {/* Pulsing live-moderation dot on AI safety card */}
              {f.title === "AI-powered safety" && (
                <span className="absolute top-4 right-4 flex w-2.5 h-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500" />
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Experts earn here ────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionEyebrow label="FOR EXPERTS" />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Answer questions. Get paid.
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Share what you know about your city, your trade, your neighbourhood.
            Accepted answers earn ₹50 or more — directly to your UPI.
          </p>
          {/* Stat chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              <IndianRupee className="w-3.5 h-3.5" />
              ₹50+ per answer
            </span>
            <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              UPI direct
            </span>
            <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              No lock-in
            </span>
          </div>
          <WaitlistForm label="Join as an Expert" />
        </div>
      </div>
    </section>

    {/* ── Origin story ─────────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-border/40">
      {/* India map outline watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 300 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-72 h-80 opacity-[0.12]"
        >
          <path
            d="M82,14 L110,10 L145,14 L168,18
               C190,25 210,42 216,60
               L222,82 L218,108 L215,132
               L218,150 L210,168 L205,188
               L198,215 L190,242
               C182,265 170,288 155,302 L140,312 L125,308
               C110,302 98,288 90,270
               L80,248 L68,222 L58,198
               L50,178 L46,155 L48,132
               L52,112
               C50,95 48,82 52,70
               L58,52 L66,38 L75,26 Z"
            stroke="hsl(168, 65%, 32%)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <SectionEyebrow label="OUR STORY" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Starting in India's tier-2 cities
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10 ring-1 ring-border/40">
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              We're building Get Info from the ground up in India — connecting
              people who have questions with people nearby who have answers. Any
              question, any topic, real people. Join the founding community
              shaping how it works.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-border/40">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient">Tier-2 first</div>
                <div className="text-xs text-muted-foreground mt-1">Launch cities</div>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient">3 languages</div>
                <div className="text-xs text-muted-foreground mt-1">Hindi · Hinglish · English</div>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient">₹50+</div>
                <div className="text-xs text-muted-foreground mt-1">Per accepted answer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Trust & Safety ───────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionEyebrow label="TRUST &amp; SAFETY" />
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Safe by design
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Every interaction is protected at the infrastructure level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="glass-card rounded-xl p-6 ring-1 ring-border/40 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">AI content moderation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Auto-moderation flags hate speech, threats, and drug-related
                content before posting — compliant with IT Act Section 79.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 ring-1 ring-border/40 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">Verified accounts only</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every answer is tied to a verified account. No anonymous abuse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FAQ ──────────────────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionEyebrow label="FAQ" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden ring-1 ring-border/40">
            <Accordion type="single" collapsible className="divide-y divide-border/50">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-0 px-6 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left font-display font-semibold text-base hover:no-underline [&>svg]:text-primary hover:text-primary transition-colors duration-200">
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-7">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>

    {/* ── Final CTA ────────────────────────────────────────────────────── */}
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
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
