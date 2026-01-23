import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./Button";

export const CTABanner = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-10">
      <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
            Ready for production
          </p>
          <h3 className="mt-3 text-2xl md:text-3xl">
            Partner with a team built for uptime and precision.
          </h3>
          <p className="mt-3 text-sm text-white/70">
            Share your drawings and requirements. We will return a detailed
            feasibility review within 48 hours.
          </p>
        </div>
        <Button to="/contact#quote">
          Start a Quote <FiArrowUpRight />
        </Button>
      </div>
    </div>
  );
};
