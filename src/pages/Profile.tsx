import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, MessageCircle, Award, Settings } from "lucide-react";

const Profile = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="glass-card rounded-xl p-8 text-center mb-6">
        <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">AM</div>
        <h1 className="font-display text-2xl font-bold">Alex Morgan</h1>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" /> San Francisco, CA</p>
        <div className="flex justify-center gap-6 mt-5">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">42</div>
            <div className="text-xs text-muted-foreground">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">128</div>
            <div className="text-xs text-muted-foreground">Answers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-warning flex items-center gap-1 justify-center"><Star className="w-4 h-4" /> 4.8</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          <Badge variant="secondary"><Award className="w-3 h-3 mr-1" /> Top Helper</Badge>
          <Badge variant="secondary"><MessageCircle className="w-3 h-3 mr-1" /> Quick Responder</Badge>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1"><Settings className="w-4 h-4 mr-2" /> Edit Profile</Button>
        <Button variant="outline" className="flex-1">View History</Button>
      </div>
    </div>
  </Layout>
);

export default Profile;
