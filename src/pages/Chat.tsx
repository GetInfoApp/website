import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MapPin } from "lucide-react";

const mockMessages = [
  { id: 1, from: "helper", name: "Sara K.", text: "Hey! There's a great cafe called Brew & Code on 3rd St. Super quiet, good Wi-Fi.", time: "10:32 AM" },
  { id: 2, from: "user", name: "You", text: "Thanks! Is it walkable from downtown?", time: "10:33 AM" },
  { id: 3, from: "helper", name: "Sara K.", text: "Yes, about a 5-minute walk. It's right past the bookstore.", time: "10:34 AM" },
];

const Chat = () => {
  const [msg, setMsg] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <div className="glass-card rounded-xl overflow-hidden flex flex-col" style={{ height: "calc(100vh - 12rem)" }}>
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">SK</div>
            <div>
              <div className="font-display font-semibold text-sm">Sara K.</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Downtown, 0.2 mi away</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${m.from === "user" ? "gradient-hero text-primary-foreground" : "bg-muted"}`}>
                  <p className="text-sm">{m.text}</p>
                  <p className={`text-[10px] mt-1 ${m.from === "user" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input placeholder="Type a message..." value={msg} onChange={(e) => setMsg(e.target.value)} className="flex-1" />
            <Button size="icon" className="gradient-hero text-primary-foreground border-0">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
