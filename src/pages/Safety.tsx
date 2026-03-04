import Layout from "@/components/Layout";
import { Shield, CheckCircle, AlertTriangle, XCircle, Heart, Info } from "lucide-react";

const domains = [
  { icon: CheckCircle, name: "Safe", color: "text-success", bg: "bg-success/10", desc: "Normal questions are routed to nearby helpers." },
  { icon: AlertTriangle, name: "Adult Content", color: "text-warning", bg: "bg-warning/10", desc: "Content is blocked. User receives a neutral, non-judgmental message." },
  { icon: XCircle, name: "Illegal (Non-Violent)", color: "text-accent", bg: "bg-accent/10", desc: "Blocked and not routed. User is informed without shame." },
  { icon: XCircle, name: "Illegal (Violent)", color: "text-destructive", bg: "bg-destructive/10", desc: "Blocked immediately. Redirected to support resources." },
  { icon: Heart, name: "Mental Distress", color: "text-info", bg: "bg-info/10", desc: "Not routed to helpers. User is gently connected to crisis support." },
];

const Safety = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-5">
          <Shield className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Trust & Safety</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Get Info uses AI-powered content classification to ensure every interaction is safe. Unsafe inputs are never routed to community helpers.
        </p>
      </div>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-4">How Safety Works</h2>
        <div className="glass-card rounded-xl p-6 space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-display font-semibold">Question Submitted</h3>
              <p className="text-sm text-muted-foreground">User submits a real-world question with location context.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-display font-semibold">AI Classification</h3>
              <p className="text-sm text-muted-foreground">The question is analyzed by the LLM pipeline and assigned a safety domain.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-display font-semibold">Route or Redirect</h3>
              <p className="text-sm text-muted-foreground">Safe questions proceed to matching. Unsafe questions are handled with care — never routed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-6">Safety Domains</h2>
        <div className="space-y-4">
          {domains.map((d, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl ${d.bg} flex items-center justify-center flex-shrink-0`}>
                <d.icon className={`w-5 h-5 ${d.color}`} />
              </div>
              <div>
                <h3 className="font-display font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UX messaging */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Our Approach to UX Messaging</h2>
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-info mt-0.5" />
            <p className="text-sm text-muted-foreground">
              When content is blocked, users receive <strong className="text-foreground">neutral, non-judgmental messages</strong>. We never shame, accuse, or use alarming language. The goal is to redirect with care and connect people to appropriate resources when needed.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-medium text-foreground mb-1">Example message:</p>
            <p className="text-muted-foreground italic">"We weren't able to process this question. If you're going through a difficult time, here are some resources that might help. You're not alone."</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Safety;
