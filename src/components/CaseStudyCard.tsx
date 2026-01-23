import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";

export const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/projects/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-panel/70 transition hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent/70">
            {study.industry}
          </span>
          <span className="text-[10px] text-muted">Case Study</span>
        </div>
        <h3 className="mt-2 text-base font-semibold">{study.title}</h3>
        <p className="mt-2 text-xs text-muted line-clamp-2">{study.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {study.capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border px-2 py-0.5 text-[10px] text-muted"
            >
              {capability}
            </span>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted/70 mb-1">
            Results
          </p>
          <div className="space-y-0.5 text-xs text-muted">
            {study.results.slice(0, 2).map((metric) => (
              <p key={metric}>{metric}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
