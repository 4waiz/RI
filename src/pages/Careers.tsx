import { jobs } from "../data/jobs";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { PageHeroImage } from "../components/PageHeroImage";

const Careers = () => {
  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Careers"
            title="Build the systems that power industry."
            description="Join a team focused on precision, safety, and continuous improvement."
          />
          <PageHeroImage
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=700&fit=crop"
            alt="Engineering team on the factory floor"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.id} className="panel rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl">{job.title}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {job.type}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent/70">
                  {job.location}
                </p>
                <p className="mt-3 text-sm text-white/70">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-xs text-white/60">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-panel/50">
        <div className="content-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Benefits"
              title="Designed for long-term growth."
              description="We invest in training, safe workplaces, and the tools needed to deliver precision outcomes."
            />
            <div className="mt-6 grid gap-4 text-sm text-white/70">
              <p>Competitive compensation with performance bonuses.</p>
              <p>Health, dental, and vision coverage.</p>
              <p>Paid certifications and tuition support.</p>
              <p>Modern equipment and safety-first environment.</p>
            </div>
          </div>
          <form className="panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
              Application form
            </p>
            <h3 className="mt-2 text-xl">Introduce yourself.</h3>
            <div className="mt-4 space-y-4 text-sm">
              <input
                className="w-full rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-white/90"
                placeholder="Full name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-white/90"
                placeholder="Email"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-white/90"
                placeholder="Role of interest"
              />
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-white/90"
                placeholder="Tell us about your experience"
              />
              <Button type="button" variant="outline" className="w-full">
                Submit application
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
