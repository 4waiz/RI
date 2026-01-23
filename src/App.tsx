import React, { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProgressBar } from "./components/ProgressBar";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { useRouteProgress } from "./hooks/useRouteProgress";
import { Home } from "./pages/Home";
import { Capabilities } from "./pages/Capabilities";
import { Industries } from "./pages/Industries";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

const Quality = React.lazy(() => import("./pages/Quality"));
const Careers = React.lazy(() => import("./pages/Careers"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));

const PageShell = ({ children }: { children: React.ReactNode }) => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();
  const reduceMotion = usePrefersReducedMotion();
  const { progress, visible } = useRouteProgress(location.pathname, reduceMotion);

  return (
    <div className="relative min-h-screen bg-base">
      <div className="pointer-events-none fixed inset-0 blueprint-grid opacity-10" />
      <div className="pointer-events-none fixed inset-0 rivet-texture opacity-10" />
      <ScrollToTop />
      <ProgressBar progress={progress} visible={visible} />
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div className="content-container py-20 text-white/70">
              Loading...
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageShell>
                  <Home />
                </PageShell>
              }
            />
            <Route
              path="/capabilities"
              element={
                <PageShell>
                  <Capabilities />
                </PageShell>
              }
            />
            <Route
              path="/industries"
              element={
                <PageShell>
                  <Industries />
                </PageShell>
              }
            />
            <Route
              path="/projects"
              element={
                <PageShell>
                  <Projects />
                </PageShell>
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <PageShell>
                  <ProjectDetail />
                </PageShell>
              }
            />
            <Route
              path="/quality"
              element={
                <PageShell>
                  <Quality />
                </PageShell>
              }
            />
            <Route
              path="/careers"
              element={
                <PageShell>
                  <Careers />
                </PageShell>
              }
            />
            <Route
              path="/contact"
              element={
                <PageShell>
                  <Contact />
                </PageShell>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
