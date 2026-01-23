import { useEffect, useMemo, useState } from "react";

export const useRouteProgress = (pathname: string, reducedMotion: boolean) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const timings = useMemo(
    () => ({
      start: reducedMotion ? 20 : 50,
      mid: reducedMotion ? 160 : 260,
      end: reducedMotion ? 320 : 520,
      hide: reducedMotion ? 420 : 760,
    }),
    [reducedMotion]
  );

  useEffect(() => {
    setVisible(true);
    setProgress(0);
    const t1 = setTimeout(() => setProgress(28), timings.start);
    const t2 = setTimeout(() => setProgress(72), timings.mid);
    const t3 = setTimeout(() => setProgress(100), timings.end);
    const t4 = setTimeout(() => setVisible(false), timings.hide);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname, timings]);

  return { progress, visible };
};
