import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, MapPin } from "lucide-react";

const RateAnswer = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-lg">
        <h1 className="font-display text-2xl font-bold mb-6 text-center">Rate This Answer</h1>

        <div className="glass-card rounded-xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-1">Your question:</p>
          <p className="font-medium mb-4">"Where can I find a quiet cafe with Wi-Fi nearby?"</p>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-primary-foreground text-xs font-bold">SK</div>
              <div>
                <span className="text-sm font-medium">Sara K.</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1 ml-2"><MapPin className="w-3 h-3" /> 0.2 mi</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Brew & Code on 3rd St — super quiet, great Wi-Fi, about a 5-min walk from downtown.</p>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-3">How helpful was this answer?</p>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                onMouseEnter={() => setHover(s)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(s)}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star className={`w-8 h-8 ${s <= (hover || rating) ? "text-warning fill-warning" : "text-border"}`} />
              </button>
            ))}
          </div>
        </div>

        <Textarea placeholder="Optional feedback..." className="mb-4" />
        <Button className="w-full gradient-hero text-primary-foreground border-0" disabled={!rating}>Submit Rating</Button>
      </div>
    </Layout>
  );
};

export default RateAnswer;
