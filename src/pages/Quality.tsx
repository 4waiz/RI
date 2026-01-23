import { SectionHeading } from "../components/SectionHeading";
import { Accordion } from "../components/Accordion";
import { CTABanner } from "../components/CTABanner";
import { PageHeroImage } from "../components/PageHeroImage";

const qaSteps = [
  {
    question: "Incoming inspection",
    answer:
      "Material certifications are verified on receipt, with hardness and dimensional checks recorded in the QA system.",
  },
  {
    question: "In-process validation",
    answer:
      "CMM and optical metrology checkpoints are scheduled per control plans, supported by SPC monitoring.",
  },
  {
    question: "Final inspection & traceability",
    answer:
      "Serialized lots receive final dimensional reports and documented release before shipment.",
  },
];

const Quality = () => {
  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Quality & Safety"
            title="Documented quality systems with a safety-first culture."
            description="Our QA program aligns to ISO-style standards with documented inspection plans, traceability, and continuous improvement cycles."
          />
          <PageHeroImage
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&h=700&fit=crop"
            alt="Quality inspection and metrology"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="panel rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                Certifications
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/70">
                <p>ISO 9001:2015-aligned quality management</p>
                <p>AS9100-ready documentation framework</p>
                <p>ITAR-compliant data handling</p>
                <p>OSHA 18001 safety audits</p>
                <p>Lean manufacturing continuous improvement</p>
              </div>
              <a
                href="/rabana-spec-sheet.txt"
                download
                className="mt-6 inline-flex rounded-full border border-accent/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-accent"
              >
                Download spec sheet (dummy)
              </a>
            </div>
            <div className="panel rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                Safety commitments
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>Daily safety standups and hazard reviews.</li>
                <li>Lockout/tagout compliance across all cells.</li>
                <li>Certified training for all operators and welders.</li>
                <li>Zero-incident culture reinforced by leadership.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-panel/40">
        <div className="content-container">
          <SectionHeading
            eyebrow="QA Process"
            title="Quality assurance checkpoints at every stage."
            description="Our QA workflow ensures repeatable performance and documented compliance."
          />
          <div className="mt-10">
            <Accordion items={qaSteps} />
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

export default Quality;
