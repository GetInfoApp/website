import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground text-sm mt-1">Sign in to Get Info</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5" />
              </div>
              <Button className="w-full gradient-hero text-primary-foreground border-0">Sign In</Button>
            </div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-xs text-muted-foreground"><span className="bg-card px-3">or continue with</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">Google</Button>
              <Button variant="outline" className="w-full">GitHub</Button>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
