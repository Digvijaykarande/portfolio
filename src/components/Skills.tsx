import { useState } from "react";
import { skillGroups, projectsUsing, type Skill } from "@/data/portfolio";

const Skills = () => {
  const [picked, setPicked] = useState<Skill | null>(null);
  const used = picked ? projectsUsing(picked) : [];

  let readout = "Hover or tap a skill to see where I've used it.";
  if (picked) {
    if (used.length) readout = `${picked.name} is used in ${used.join(", ")}.`;
    else if (picked.note) readout = picked.note;
    else readout = `${picked.name} isn't in a featured project yet.`;
  }

  return (
    <section id="skills" className="section" style={{ background: "var(--paper-deep)" }}>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Skills</h2>
          <p className="section-lede">
            The tools I work with, grouped by what they do. Pick one to see which of my projects use it.
          </p>
        </div>

        <div className="grid gap-x-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="grid gap-3 border-t py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                style={{ borderColor: "var(--line)" }}
              >
                <h3 className="text-lg font-bold" style={{ letterSpacing: "-0.01em", lineHeight: 1.3 }}>{g.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => {
                    const on = picked?.name === s.name;
                    return (
                      <li key={s.name}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onMouseEnter={() => setPicked(s)}
                          onFocus={() => setPicked(s)}
                          onClick={() => setPicked(on ? null : s)}
                          className="rounded-full border-2 px-4 py-1.5 font-medium transition-colors"
                          style={{
                            borderColor: on ? "var(--cobalt)" : "var(--ink)",
                            background: on ? "var(--cobalt)" : "transparent",
                            color: on ? "#fff" : "var(--ink)",
                          }}
                        >
                          {s.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <aside className="mt-8 lg:col-span-4 lg:mt-0">
            <div className="rounded-2xl p-6 lg:sticky lg:top-24" style={{ background: "var(--card-surface)", border: "2px solid var(--line)" }}>
              <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                {picked ? picked.name : "Where I've used it"}
              </p>
              <p aria-live="polite" className="mt-2 min-h-[4.5rem] text-[1.1rem] font-medium leading-snug">
                {readout}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
