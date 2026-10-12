import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { certificates, profile, projects, skillGroups } from "@/data/portfolio";

const endpoints = ["/about", "/stack", "/projects", "/certificates"] as const;
type Endpoint = (typeof endpoints)[number];

const buildResponse = (path: Endpoint): unknown => {
  switch (path) {
    case "/about":
      return {
        name: profile.name,
        role: profile.role,
        location: profile.location,
        education: [
          "MCA, Bharati Vidyapeeth IMED (2025-2027)",
          "BCA, Shivaji University (2022-2025)",
        ],
        experience: "Full Stack Developer Trainee, Loyanox (Jun-Aug 2026)",
        openToWork: true,
      };
    case "/stack":
      return Object.fromEntries(
        skillGroups
          .filter((g) => g.label !== "Tools and cloud")
          .map((g) => [g.label.toLowerCase(), g.skills.map((s) => s.name)])
      );
    case "/projects":
      return { count: projects.length, items: projects.map((p) => p.title) };
    case "/certificates":
      return { count: certificates.length, items: certificates.map((c) => c.title) };
  }
};

/** Colours JSON tokens: keys, strings, numbers. Works on partially typed text. */
const highlight = (text: string): ReactNode[] => {
  const re = /("(?:\\.|[^"\\])*")(\s*:)?|("(?:\\.|[^"\\])*$)|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(
        <span key={k++} style={{ color: m[2] ? "var(--console-key)" : "var(--console-str)" }}>
          {m[1]}
        </span>
      );
      if (m[2]) out.push(m[2]);
    } else if (m[3]) {
      out.push(<span key={k++} style={{ color: "var(--console-str)" }}>{m[3]}</span>);
    } else {
      out.push(<span key={k++} style={{ color: "var(--console-num)" }}>{m[4] ?? m[5]}</span>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

const Console = () => {
  const reduce = useReducedMotion();
  const [endpoint, setEndpoint] = useState<Endpoint>("/about");
  const [count, setCount] = useState(0);
  const firstRun = useRef(true);

  const full = useMemo(() => JSON.stringify(buildResponse(endpoint), null, 2), [endpoint]);
  const done = count >= full.length;

  useEffect(() => {
    setCount(0);
    if (reduce) {
      setCount(full.length);
      return;
    }
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= full.length) {
            if (interval) clearInterval(interval);
            return c;
          }
          return Math.min(c + 4, full.length);
        });
      }, 16);
    };
    // The very first response waits for the headline to land.
    const delay = firstRun.current ? 1100 : 120;
    firstRun.current = false;
    const t = setTimeout(start, delay);
    return () => {
      clearTimeout(t);
      if (interval) clearInterval(interval);
    };
  }, [full, reduce]);

  return (
    <div
      className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(14,19,32,0.55)]"
      style={{ background: "var(--console)", color: "var(--console-text)" }}
    >
      <div role="tablist" aria-label="API endpoints" className="mono flex gap-1 overflow-x-auto p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
        {endpoints.map((p) => (
          <button
            key={p}
            role="tab"
            type="button"
            aria-selected={endpoint === p}
            onClick={() => setEndpoint(p)}
            className="shrink-0 rounded-lg px-3 py-2 text-[0.8rem] transition-colors"
            style={{
              background: endpoint === p ? "var(--cobalt)" : "transparent",
              color: endpoint === p ? "#fff" : "#a9b4cf",
            }}
          >
            GET {p}
          </button>
        ))}
      </div>

      <div className="mono flex items-center justify-between gap-3 border-b px-4 py-3 text-[0.78rem]" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#8e9ab8" }}>
        <span className="truncate">GET {endpoint} HTTP/1.1</span>
        <span style={{ color: done ? "var(--console-str)" : "#8e9ab8" }}>{done ? "200 OK" : "sending"}</span>
      </div>

      <pre className="sr-only">{full}</pre>
      <pre
        aria-hidden
        className="mono m-0 h-[19rem] overflow-auto whitespace-pre p-4 text-[0.8rem] leading-relaxed sm:h-[21rem] sm:text-[0.86rem]"
      >
        {highlight(full.slice(0, count))}
        {!done && <span className="caret" style={{ color: "var(--console-key)" }}>▌</span>}
      </pre>
    </div>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { y: "108%" },
    animate: { y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-14 pt-28 lg:pb-20 lg:pt-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border-2 px-4 py-1.5 text-[0.95rem] font-medium" style={{ borderColor: "var(--line)", background: "var(--card-surface)" }}>
            <span className="relative inline-block h-2.5 w-2.5 rounded-full ping-dot" style={{ background: "#16a34a" }} />
            {profile.status}, based in Pune
          </p>

          <h1 className="hero-name" aria-label={profile.name}>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span className="block" {...rise(0.05)}>Digvijay</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span className="block" style={{ color: "var(--cobalt)" }} {...rise(0.18)}>Karande</motion.span>
            </span>
          </h1>

          <p className="mt-7 max-w-[34rem] text-[1.2rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            I build full-stack apps with Java, Spring Boot and React: the API, the database and the screen it all ends up on.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-solid">View projects</a>
            <a href="#contact" className="btn btn-line">Contact me</a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Console />
          <p className="mt-3 text-sm" style={{ color: "var(--slate)" }}>
            Pick an endpoint to query my portfolio the way a backend would.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
