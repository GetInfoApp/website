import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import AskQuestion from "./pages/AskQuestion";
import ApiDocs from "./pages/ApiDocs";
import Safety from "./pages/Safety";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import RateAnswer from "./pages/RateAnswer";
import MatchSummary from "./pages/MatchSummary";
import Terms from "./pages/Terms";
import Experts from "./pages/Experts";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBase}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/api" element={<ApiDocs />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/rate" element={<RateAnswer />} />
          <Route path="/matches" element={<MatchSummary />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
