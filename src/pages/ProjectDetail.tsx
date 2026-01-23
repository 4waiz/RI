import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";

const ProjectDetail = () => {
  const { slug } = useParams();
  const study = useMemo(
    () => caseStudies.find((item) => item.slug === slug),
    [slug]
  );

  if (!study) {
    return (
      <main className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Not found"
            title="Case study not available."
            description="Return to the projects page to explore current programs."
          />
          <Link
            to="/projects"
            className="mt-8 inline-flex text-sm uppercase tracking-[0.25em] text-accent"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow={study.industry}
            title={study.title}
            description={study.summary}
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <img
              src={study.image}
              alt={study.title}
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Challenge
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {study.challenge}
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Solution
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {study.solution}
                </p>
              </div>
            </div>
            <div className="panel rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                Results
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {study.results.map((metric) => (
                  <p key={metric} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {metric}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                  >
                    {capability}
                  </span>
                ))}
              </div>
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

export default ProjectDetail;
