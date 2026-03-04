import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using Get Info, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">2. Service Description</h2>
          <p>Get Info is a location-based community platform that connects users with nearby individuals who can answer real-world questions. The service includes AI-powered question improvement and safety classification.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">3. User Responsibilities</h2>
          <p>Users must provide accurate location information and agree not to misuse the platform. All questions and answers must comply with our community guidelines and safety policies.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">4. Content Moderation</h2>
          <p>All user-submitted content is processed through our AI safety pipeline. Content classified as unsafe is not routed to community helpers and may result in account restrictions.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">5. Privacy & Data</h2>
          <p>Location data is used solely for matching purposes and is not stored beyond the active session unless explicitly saved by the user. See our Privacy Policy for full details.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">6. Premium Services</h2>
          <p>Premium subscriptions provide additional features and are billed monthly. Cancellation takes effect at the end of the current billing period.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">7. Contact</h2>
          <p>For questions about these terms, contact us at legal@getinfo.app.</p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Terms;
