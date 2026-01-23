import { industries } from "../data/industries";
import { IndustryTile } from "../components/IndustryTile";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { PageHeroImage } from "../components/PageHeroImage";

export const Industries = () => {
  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Industries Served"
            title="Built for the systems that keep the world running."
            description="From aerospace assemblies to heavy construction systems, we deliver engineered manufacturing with traceable quality."
          />
          <PageHeroImage
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=700&fit=crop"
            alt="Industrial manufacturing facility"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryTile key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-panel/50">
        <div className="content-container grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Program support"
              title="Dedicated program management for every account."
              description="Our teams coordinate multi-site fabrication, sourcing, and logistics while maintaining your quality documentation requirements."
            />
          </div>
          <div className="panel rounded-2xl p-6">
            <p className="text-sm text-white/70">
              We support DFARS-aligned documentation, ITAR workflows, and
              mission-critical uptime SLAs. Every build is backed by serialized
              tracking, inspection plans, and live schedule reporting.
            </p>
            <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.3em] text-white/60">
              <p>Dedicated QA cell</p>
              <p>24/7 escalation coverage</p>
              <p>Field service readiness</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-container">
          <CTABanner />
        </div>
      </section>
    </main>
  );
};
