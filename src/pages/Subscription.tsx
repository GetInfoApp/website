import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Get started with basic features",
    features: ["5 questions/day", "Nearby feed", "Basic matching", "Community chat"],
    cta: "Current Plan",
    active: true,
    highlight: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    desc: "Priority matching and unlimited access",
    features: ["Unlimited questions", "Priority matching", "Advanced analytics", "Ad-free experience", "Verified badge", "Premium support"],
    cta: "Upgrade",
    active: false,
    highlight: true,
  },
];

const Subscription = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-3xl text-center">
      <Crown className="w-10 h-10 text-accent mx-auto mb-4" />
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Choose Your Plan</h1>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">Get more from Get Info with premium features and priority access.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`glass-card rounded-2xl p-8 text-left relative ${p.highlight ? "ring-2 ring-primary shadow-elevated" : ""}`}>
            {p.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground border-0"><Zap className="w-3 h-3 mr-1" /> Popular</Badge>}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <div className="mt-2 mb-1">
              <span className="text-3xl font-bold">{p.price}</span>
              {p.period && <span className="text-muted-foreground text-sm">{p.period}</span>}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${p.highlight ? "gradient-hero text-primary-foreground border-0" : ""}`}
              variant={p.highlight ? "default" : "outline"}
              disabled={p.active}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Subscription;
