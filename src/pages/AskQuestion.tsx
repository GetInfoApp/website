import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, MapPin, Zap, CheckCircle } from "lucide-react";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [location, setLocation] = useState("Downtown, San Francisco");
  const [urgency, setUrgency] = useState<"normal" | "urgent">("normal");
  const [improved, setImproved] = useState(false);

  const mockImproved = "Could you recommend a quiet café with reliable Wi-Fi near Downtown San Francisco, ideally within walking distance?";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="font-display text-3xl font-bold mb-2">Ask a Question</h1>
        <p className="text-muted-foreground mb-8">Your question will be improved by AI, safety-checked, and matched to nearby helpers.</p>

        <div className="space-y-6">
          <div>
            <Label htmlFor="question">Your Question</Label>
            <Textarea
              id="question"
              placeholder="e.g. Need a quiet cafe with Wi-Fi nearby"
              value={question}
              onChange={(e) => { setQuestion(e.target.value); setImproved(false); }}
              className="mt-1.5 min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <div className="relative mt-1.5">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="pl-9" />
              </div>
            </div>
            <div>
              <Label>Urgency</Label>
              <div className="flex gap-2 mt-1.5">
                <Button
                  variant={urgency === "normal" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUrgency("normal")}
                  className={urgency === "normal" ? "gradient-hero text-primary-foreground border-0" : ""}
                >
                  Normal
                </Button>
                <Button
                  variant={urgency === "urgent" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUrgency("urgent")}
                  className={urgency === "urgent" ? "bg-accent text-accent-foreground border-0" : ""}
                >
                  <Zap className="w-3.5 h-3.5 mr-1" /> Urgent
                </Button>
              </div>
            </div>
          </div>

          {/* AI Improve preview */}
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-sm">AI-Improved Preview</span>
              <Badge variant="secondary" className="text-xs">Auto</Badge>
            </div>
            {question.length > 10 ? (
              <>
                <p className="text-sm bg-secondary/50 rounded-lg p-3 mb-3">{improved ? mockImproved : "Click 'Improve' to see the AI suggestion."}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => setImproved(true)} disabled={improved}>
                    <Brain className="w-3.5 h-3.5 mr-1" /> Improve
                  </Button>
                  {improved && (
                    <Button size="sm" variant="outline" onClick={() => setQuestion(mockImproved)} className="text-primary">
                      <CheckCircle className="w-3.5 h-3.5 mr-1" /> Apply
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Type at least 10 characters to see AI suggestions.</p>
            )}
          </div>

          <Button size="lg" className="w-full gradient-hero text-primary-foreground border-0">Post Question</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AskQuestion;
