import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Plus } from "lucide-react";
import { asset, profile, projects } from "@/data/portfolio";

const Projects = () => {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <p className="section-lede">
            Seven things I've built and deployed. Open one to see what it does and what it's made with.
          </p>
        </div>

        <ul className="border-b" style={{ borderColor: "var(--ink)" }}>
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <li key={p.title} className="border-t" style={{ borderColor: i === 0 ? "var(--ink)" : "var(--line)" }}>
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`project-${i}`}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                  >
                    <span className="flex min-w-0 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                      <span
                        className="text-[1.75rem] font-bold leading-tight transition-colors sm:text-4xl"
                        style={{ letterSpacing: "-0.03em", color: isOpen ? "var(--cobalt)" : "var(--ink)" }}
                      >
                        {p.title}
                      </span>
                      <span className="text-[0.95rem] font-normal" style={{ color: "var(--slate)", letterSpacing: 0 }}>
                        {p.kind}
                      </span>
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)]"
                      style={{ borderColor: "var(--ink)" }}
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`project-${i}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 md:grid-cols-12 md:gap-10">
                        <div
                          className="relative aspect-[16/10] overflow-hidden rounded-xl md:col-span-6"
                          style={{ background: "var(--paper-deep)" }}
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold"
                            style={{ color: "var(--line)", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                          >
                            {p.title.slice(0, 2)}
                          </span>
                          <img
                            src={asset(p.image)}
                            alt={`${p.title} screenshot`}
                            loading="lazy"
                            className="relative h-full w-full object-cover object-top"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                        </div>

                        <div className="flex flex-col md:col-span-6">
                          <p className="text-[1.05rem] font-medium">{p.summary}</p>
                          <p className="mt-3 leading-relaxed" style={{ color: "var(--slate)" }}>{p.description}</p>

                          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                            {p.tags.map((t) => (
                              <li key={t} className="tag">{t}</li>
                            ))}
                          </ul>

                          <div className="mt-6 flex flex-wrap gap-3">
                            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-solid btn-small">
                              <ExternalLink size={16} /> Live demo
                            </a>
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-small">
                              <Github size={16} /> Source code
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <p className="mt-8">
          More repositories are on{" "}
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="link-u font-semibold">
            my GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Projects;
