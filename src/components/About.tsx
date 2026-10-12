const facts = [
  { label: "Studying", value: "MCA at Bharati Vidyapeeth IMED, Pune (2025-2027)" },
  { label: "Completed", value: "BCA at Shivaji University (2022-2025)" },
  { label: "Trained in", value: "Full Stack Java, Symbiosis Skills & Professional University with Capgemini" },
  { label: "Worked at", value: "Loyanox, Pune, as a Full Stack Developer Trainee" },
];

const About = () => (
  <section id="about" className="section">
    <div className="wrap">
      <div className="section-head">
        <h2 className="section-title">About me</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-[1.125rem] leading-[1.7] lg:col-span-7" style={{ maxWidth: "40rem" }}>
          <p>
            I'm a full-stack developer currently doing an MCA after finishing a BCA. I work mostly in Java and Spring Boot on the
            backend and React on the front end, with MySQL, MongoDB, Node.js and Firebase when a project calls for them.
          </p>
          <p>
            The things I've built so far are a real-time chat app, an AI-assisted Excel analytics tool, a job board
            and a GitHub-style code hosting platform. I focus on clean architecture, secure authentication and
            optimised performance.
          </p>
          <p>
            I'm looking for a first full-stack role in a Java or MERN team where I can keep learning and ship real
            features.
          </p>
        </div>

        <dl className="lg:col-span-5">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 border-t py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6" style={{ borderColor: "var(--line)" }}>
              <dt className="font-semibold">{f.label}</dt>
              <dd style={{ color: "var(--slate)" }}>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
