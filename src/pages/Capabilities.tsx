import { capabilities } from "../data/capabilities";
import { CapabilityCard } from "../components/CapabilityCard";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { PageHeroImage } from "../components/PageHeroImage";

export const Capabilities = () => {
  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Precision services for complex manufacturing programs."
            description="Integrated machining, fabrication, assembly, and lifecycle support built on robust QA and documented processes."
          />
          <PageHeroImage
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&h=700&fit=crop"
            alt="CNC machining operations"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.id} capability={capability} />
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Engineering partnership",
                description:
                  "DFM collaboration, tolerance stack studies, and materials consulting to reduce risk before production.",
              },
              {
                title: "Traceable QA",
                description:
                  "CMM inspection, SPC monitoring, and certified documentation tailored to your compliance needs.",
              },
              {
                title: "Scaled delivery",
                description:
                  "Flexible capacity with vendor-managed inventory and staged deliveries to maintain your schedule.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="panel rounded-2xl p-6">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
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
