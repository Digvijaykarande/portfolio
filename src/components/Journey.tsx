import { journey } from "@/data/portfolio";

const Journey = () => (
  <section id="journey" className="section" style={{ background: "var(--paper-deep)" }}>
    <div className="wrap">
      <div className="section-head">
        <h2 className="section-title">Experience and education</h2>
        <p className="section-lede">Where I've worked and studied, newest first.</p>
      </div>

      <ol>
        {journey.map((j) => (
          <li
            key={j.title + j.period}
            className="grid gap-2 border-t py-7 md:grid-cols-[12rem_1fr] md:gap-10"
            style={{ borderColor: "var(--line)" }}
          >
            <div>
              <p className="font-semibold">{j.period}</p>
              <p className="text-sm" style={{ color: "var(--slate)" }}>{j.type}</p>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold">{j.title}</h3>
              <p className="mt-1 font-medium" style={{ color: "var(--cobalt)" }}>{j.place}</p>
              <p className="mt-3" style={{ color: "var(--slate)" }}>{j.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Journey;
