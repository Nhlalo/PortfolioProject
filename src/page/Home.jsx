// App.jsx
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Music,
  Dumbbell,
  Code,
  Shield,
  Database,
  Sparkles,
} from "lucide-react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated gradient blob that follows mouse */}
      <div
        className="fixed w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-20 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Nhlalonhle
            </h1>
            <p className="text-purple-300 mt-1">Full-Stack Developer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nhlalonkosi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles size={14} />
            <span>Open to junior opportunities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            I build
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              full-stack apps{" "}
            </span>
            that ship
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            full-stack apps • APIs integratation • Production-ready
            authentication • Stripe payments
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500" />
            <span className="text-sm uppercase tracking-wider text-purple-300">
              Featured Work
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vélo Fitness */}
            <ProjectCard
              icon={<Dumbbell size={28} />}
              title="Vélo Fitness"
              description="Full-stack gym platform with class booking, Stripe payments, and JWT authentication (access + refresh tokens)."
              tags={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "Stripe",
              ]}
              features={[
                "JWT tokens",
                "Stripe webhooks",
                "Email notifications",
                "REST API",
              ]}
              liveLink="https://velofitness.netlify.app"
              codeLink="https://github.com/yourusername/velo-fitness-frontend"
              gradient="from-emerald-500 to-teal-500"
            />

            {/* Musicfier */}
            <ProjectCard
              icon={<Music size={28} />}
              title="Musicfier"
              description="Audio recognition app (Shazam clone) that pulls rich metadata and concert info from 6 different APIs."
              tags={[
                "React",
                "Vite",
                "Netlify Functions",
                "Audd API",
                "Spotify",
                "Ticketmaster",
              ]}
              features={[
                "Audio recording",
                "API security",
                "Location-aware",
                "Concert finder",
              ]}
              liveLink="https://musicfier.netlify.app"
              codeLink="https://github.com/yourusername/musicfier"
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </section>

        {/* Skills & Tech */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500" />
            <span className="text-sm uppercase tracking-wider text-purple-300">
              Tech Stack
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillCard
              title="Frontend"
              items={["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"]}
            />
            <SkillCard
              title="Backend"
              items={["Node.js", "Express", "REST API", "Netlify Functions"]}
            />
            <SkillCard
              title="Database"
              items={["PostgreSQL", "Prisma", "SQL"]}
            />
            <SkillCard
              title="Tools"
              items={["Git", "Stripe", "JWT", "Render"]}
            />
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500" />
            <span className="text-sm uppercase tracking-wider text-purple-300">
              Beyond Code
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Shield />}
              title="Security First"
              description="API keys never exposed. Tokens in HTTP-only cookies. Webhook verification."
            />
            <ValueCard
              icon={<Database />}
              title="Real Databases"
              description="PostgreSQL with Prisma. Migrations. Seeds. Production-ready."
            />
            <ValueCard
              icon={<Code />}
              title="Clean Code"
              description="TypeScript across stack. Error handling. Tests included."
            />
          </div>
        </section>

        {/* Contact */}
        <footer className="text-center pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Built with React + Tailwind CSS • Designed to be clean and fast
          </p>
        </footer>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  icon,
  title,
  description,
  tags,
  features,
  liveLink,
  codeLink,
  gradient,
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, tags.length).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-white/10 text-purple-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        {features.map((f) => (
          <span key={f} className="text-xs text-gray-400">
            • {f}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          className="text-sm flex items-center gap-1 text-purple-300 hover:text-purple-200 transition"
        >
          Live Demo <ExternalLink size={14} />
        </a>
        <a
          href={codeLink}
          target="_blank"
          className="text-sm flex items-center gap-1 text-gray-400 hover:text-gray-300 transition"
        >
          Code <Github size={14} />
        </a>
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({ title, items }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 text-center">
      <h4 className="font-semibold text-purple-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((item) => (
          <span key={item} className="text-xs text-gray-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// Value Card Component
function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 rounded-xl p-5 text-center">
      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 text-purple-300">
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default App;
