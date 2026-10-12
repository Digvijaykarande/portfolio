import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: `My email is ${profile.email}` });
    }
  };

  // No backend on a static portfolio, so the form opens the visitor's own
  // email app with the message filled in. It is honest and it always works.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const from = String(f.get("email") || "");
    const message = String(f.get("message") || "");
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n${name}\n${from}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({ title: "Opening your email app", description: "Press send there to deliver the message." });
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title">Contact</h2>
          <p className="section-lede">
            Hiring for a full-stack role, or have something to build? Email is the fastest way to reach me.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="link-u break-all text-[1.5rem] font-bold sm:text-[2.4rem] lg:text-[2.6rem]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              {profile.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={copyEmail} className="btn btn-line btn-small">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy email"}
              </button>
              <a href={profile.phoneHref} className="btn btn-line btn-small">
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <ul className="mt-10 grid gap-3 sm:max-w-sm">
              {[
                { icon: Github, label: "GitHub", href: profile.github },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b py-3 font-semibold transition-colors hover:text-[var(--cobalt)]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span className="flex items-center gap-3"><Icon size={20} /> {label}</span>
                    <ArrowUpRight aria-hidden size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 lg:col-span-5">
            <div>
              <label htmlFor="c-name" className="field-label">Your name</label>
              <input id="c-name" name="name" required autoComplete="name" className="field" />
            </div>
            <div>
              <label htmlFor="c-email" className="field-label">Your email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" className="field" />
            </div>
            <div>
              <label htmlFor="c-message" className="field-label">Message</label>
              <textarea id="c-message" name="message" rows={5} required className="field resize-none" />
            </div>
            <button type="submit" className="btn btn-solid w-full">Write this email</button>
            <p className="text-sm" style={{ color: "var(--slate)" }}>
              This opens your email app with the message filled in, ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
