import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We collect the information you provide when signing up (phone number or email), and location data you choose to share when posting a question. We also collect usage data to improve the matching experience.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">2. How We Use Location Data</h2>
          <p>Location is used solely to match your question with nearby experts. Precise coordinates are not stored beyond the active session unless you choose to save a location. We never share your location with third parties.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">3. Content Moderation</h2>
          <p>All submitted questions are processed by our AI safety pipeline to detect harmful content. Content is analysed on our own infrastructure and is not shared with external AI providers.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">4. Payments</h2>
          <p>Payment processing is handled via UPI. We store transaction records for accounting and dispute resolution purposes. Card numbers and UPI PINs are never stored by Get Info.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">5. Data Retention</h2>
          <p>Account data is retained until you delete your account. Location data from individual questions is not retained beyond 24 hours after a question is resolved or expired.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">6. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us. We comply with applicable Indian data protection law.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-foreground">7. Contact</h2>
          <p>Privacy questions: privacy@getinfo.app</p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Privacy;
