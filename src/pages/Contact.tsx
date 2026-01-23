import { SectionHeading } from "../components/SectionHeading";
import { QuoteForm } from "../components/QuoteForm";
import { Button } from "../components/Button";
import { PageHeroImage } from "../components/PageHeroImage";

export const Contact = () => {
  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Contact"
            title="Connect with our engineering team."
            description="Share your drawings, tolerances, and lead-time targets. We will respond within one business day."
          />
          <PageHeroImage
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop"
            alt="Manufacturing facility"
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div id="quote">
              <QuoteForm />
            </div>
            <div className="space-y-4">
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Location
                </p>
                <p className="mt-4 text-sm text-muted">
                  Abu Dhabi, UAE
                </p>
                <p className="mt-4 text-sm text-muted">
                  050-475-4950<br />
                  <a href="mailto:awaiz42ad@gmail.com" className="hover:text-accent transition-colors">
                    awaiz42ad@gmail.com
                  </a>
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Business hours
                </p>
                <p className="mt-4 text-sm text-muted">
                  Sun - Thu: 8:00 AM - 6:00 PM<br />
                  Fri - Sat: Closed
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  Request facility tour
                </Button>
              </div>
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Emergency support
                </p>
                <p className="mt-4 text-sm text-muted">
                  24/7 response for critical maintenance and field service.
                </p>
                <p className="mt-4 text-sm text-muted">050-475-4950</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
