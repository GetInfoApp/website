import { useState } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Database, Globe, Brain, Shield, Lock, ChevronDown, ChevronRight, Play } from "lucide-react";

const architecture = [
  { icon: Globe, name: "Frontend Web Client", desc: "React SPA with real-time updates" },
  { icon: Server, name: "Rust Backend (Axum)", desc: "High-performance async API server" },
  { icon: Database, name: "PostgreSQL", desc: "Primary data store for users, questions, answers" },
  { icon: Database, name: "Redis", desc: "Caching, sessions, real-time pub/sub" },
  { icon: Globe, name: "Nominatim", desc: "Open-source geocoding for location resolution" },
  { icon: Brain, name: "Ollama (LLM)", desc: "Local AI for question improvement & classification" },
  { icon: Lock, name: "Casdoor / OAuth", desc: "SSO, social login, OTP authentication" },
  { icon: Shield, name: "Safety Pipeline", desc: "Content classification before routing" },
];

const endpointGroups = [
  {
    name: "Auth",
    endpoints: [
      { method: "POST", path: "/auth/login", desc: "Email/password login" },
      { method: "POST", path: "/auth/oauth/token", desc: "OAuth token exchange" },
      { method: "POST", path: "/auth/refresh", desc: "Refresh access token" },
      { method: "GET", path: "/auth/provider/login", desc: "Initiate social login" },
      { method: "POST", path: "/auth/otp/request", desc: "Request OTP code" },
      { method: "POST", path: "/auth/otp/verify", desc: "Verify OTP code" },
    ],
  },
  {
    name: "Questions",
    endpoints: [
      { method: "POST", path: "/questions", desc: "Create a new question" },
      { method: "GET", path: "/questions/nearby", desc: "Fetch nearby questions" },
      { method: "POST", path: "/questions/improve", desc: "AI-improve a question" },
      { method: "POST", path: "/questions/improve/apply", desc: "Apply AI improvement" },
      { method: "GET", path: "/questions/:id", desc: "Get question details" },
    ],
  },
  {
    name: "Answers",
    endpoints: [
      { method: "POST", path: "/questions/:id/answers", desc: "Submit an answer" },
      { method: "POST", path: "/answers/:id/rate", desc: "Rate an answer" },
    ],
  },
  {
    name: "Users & Feed",
    endpoints: [
      { method: "GET", path: "/users/me", desc: "Current user profile" },
      { method: "PATCH", path: "/users/me", desc: "Update profile" },
      { method: "GET", path: "/feed", desc: "Personalized nearby feed" },
      { method: "GET", path: "/notifications", desc: "User notifications" },
    ],
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-primary/15 text-primary",
  POST: "bg-accent/15 text-accent",
  PATCH: "bg-warning/15 text-warning",
  DELETE: "bg-destructive/15 text-destructive",
};

const ApiDocs = () => {
  const [expanded, setExpanded] = useState<string[]>(["Auth"]);
  const [playgroundReq, setPlaygroundReq] = useState("GET");
  const [playgroundPath, setPlaygroundPath] = useState("/api/v1/feed");

  const toggle = (name: string) =>
    setExpanded((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);

  const mockResponse = JSON.stringify({
    data: [
      { id: "q_01", question: "Best coffee near Central Park?", location: { lat: 40.785, lng: -73.968 }, answers_count: 3, created_at: "2026-03-01T10:30:00Z" },
    ],
    meta: { page: 1, total: 42 },
  }, null, 2);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">API Documentation</h1>
          <p className="text-muted-foreground mb-2">Base path: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">/api/v1</code></p>
          <p className="text-muted-foreground mb-10 text-sm">REST API powered by Rust (Axum) with PostgreSQL, Redis, and AI services.</p>

          {/* Architecture */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold mb-6">Architecture</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {architecture.map((a, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <a.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-display font-semibold text-sm">{a.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Endpoints */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold mb-6">Endpoints</h2>
            <div className="space-y-3">
              {endpointGroups.map((g) => (
                <div key={g.name} className="glass-card rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left font-display font-semibold"
                    onClick={() => toggle(g.name)}
                  >
                    <span>{g.name}</span>
                    <span className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">{g.endpoints.length}</Badge>
                      {expanded.includes(g.name) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </span>
                  </button>
                  {expanded.includes(g.name) && (
                    <div className="border-t border-border">
                      {g.endpoints.map((e, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-0 text-sm">
                          <Badge className={`${methodColors[e.method]} font-mono text-xs min-w-[52px] justify-center`}>{e.method}</Badge>
                          <code className="font-mono text-foreground">{e.path}</code>
                          <span className="text-muted-foreground hidden sm:block ml-auto">{e.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Playground */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-6">API Playground</h2>
            <div className="glass-card rounded-xl p-5">
              <div className="flex gap-2 mb-4">
                <select
                  value={playgroundReq}
                  onChange={(e) => setPlaygroundReq(e.target.value)}
                  className="bg-muted border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PATCH</option>
                  <option>DELETE</option>
                </select>
                <input
                  value={playgroundPath}
                  onChange={(e) => setPlaygroundPath(e.target.value)}
                  className="flex-1 bg-muted border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button size="sm" className="gradient-hero text-primary-foreground border-0">
                  <Play className="w-4 h-4 mr-1" /> Send
                </Button>
              </div>
              <div className="bg-foreground/5 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs font-mono text-foreground whitespace-pre">{mockResponse}</pre>
              </div>
              <p className="text-xs text-muted-foreground mt-3">This is a mock response. Connect your backend to see real data.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ApiDocs;
