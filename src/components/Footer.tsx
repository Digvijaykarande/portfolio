import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t-2 py-8" style={{ borderColor: "var(--ink)" }}>
    <div className="wrap flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <p className="text-[0.95rem]" style={{ color: "var(--slate)" }}>
        © {new Date().getFullYear()} {profile.name}. Designed and built by me with React and Tailwind CSS.
      </p>
      <a href="#home" className="btn btn-line btn-small">
        <ArrowUp size={16} /> Back to top
      </a>
    </div>
  </footer>
);

export default Footer;
