import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { asset, certCategories, certificates, type Certificate } from "@/data/portfolio";

type Filter = (typeof certCategories)[number]["id"];

interface ViewerProps {
  items: Certificate[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

const Viewer = ({ items, index, onIndex, onClose }: ViewerProps) => {
  const cert = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const go = useCallback(
    (d: number) => onIndex((index + d + items.length) % items.length),
    [index, items.length, onIndex]
  );

  useEffect(() => {
    const returnTo = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      returnTo?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(14,19,32,0.82)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="relative grid max-h-[92svh] w-full max-w-5xl overflow-auto rounded-2xl lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
        style={{ background: "var(--paper)" }}
        initial={reduce ? false : { y: 24, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center p-3 sm:p-5" style={{ background: "var(--paper-deep)" }}>
          <img
            key={cert.image}
            src={asset(cert.image)}
            alt={`Certificate: ${cert.title}`}
            className="max-h-[60svh] w-full rounded-lg object-contain lg:max-h-[78svh]"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full"
            style={{ background: "var(--paper)", border: "2px solid var(--ink)" }}
          >
            <X size={20} />
          </button>

          <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>{cert.date}</p>
          <h3 className="mt-2 pr-10 text-[1.7rem] font-bold">{cert.title}</h3>
          <p className="mt-3 font-medium">{cert.issuer}</p>
          <p className="mt-3" style={{ color: "var(--slate)" }}>{cert.detail}</p>
          {cert.credentialId && (
            <p className="mono mt-4 break-all text-[0.8rem]" style={{ color: "var(--slate)" }}>
              Credential ID: {cert.credentialId}
            </p>
          )}
          <ul className="mt-5 flex flex-wrap gap-2">
            {cert.skills.map((s) => (
              <li key={s} className="tag">{s}</li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between pt-8">
            <span className="text-sm" style={{ color: "var(--slate)" }}>
              {index + 1} of {items.length}
            </span>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous certificate" className="btn btn-line btn-small !px-3">
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next certificate" className="btn btn-line btn-small !px-3">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = filter === "all" ? certificates : certificates.filter((c) => c.category === filter);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="certificates" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Certificates</h2>
          <p className="section-lede">
            {certificates.length} courses and tests across Java, cloud, security and machine learning. Open one to read the original.
          </p>
        </div>

        <div role="group" aria-label="Filter certificates" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {certCategories.map((c) => {
            const on = filter === c.id;
            const n = c.id === "all" ? certificates.length : certificates.filter((x) => x.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c.id)}
                className="shrink-0 rounded-full border-2 px-4 py-1.5 font-medium transition-colors"
                style={{
                  borderColor: on ? "var(--ink)" : "var(--line)",
                  background: on ? "var(--ink)" : "transparent",
                  color: on ? "var(--paper)" : "var(--ink)",
                }}
              >
                {c.label} <span style={{ opacity: 0.6 }}>{n}</span>
              </button>
            );
          })}
        </div>

        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((c, i) => (
              <motion.li
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 text-left transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderColor: "var(--line)", background: "var(--card-surface)" }}
                  aria-label={`Open certificate: ${c.title}`}
                >
                  <span className="block aspect-[4/3] overflow-hidden" style={{ background: "var(--paper-deep)" }}>
                    <img
                      src={asset(c.image)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-5">
                    <span className="text-sm font-medium" style={{ color: "var(--slate)" }}>{c.date}</span>
                    <span className="text-[1.15rem] font-bold leading-snug" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                      {c.title}
                    </span>
                    <span className="text-[0.95rem]" style={{ color: "var(--slate)" }}>{c.issuer}</span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <Viewer items={items} index={active} onIndex={setActive} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
