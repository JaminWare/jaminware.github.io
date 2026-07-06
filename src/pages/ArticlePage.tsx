import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticlePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-sky-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Banner */}
      <div className="card-gradient rounded-xl p-6 md:p-8 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-100 leading-tight">
          From IT Support to Full Stack: My First Two Weeks Building the Learners Hub
        </h1>
        <p className="text-sm text-zinc-500 font-mono">July 2026</p>
        <div className="flex flex-wrap gap-2">
          {['Full Stack', 'React', 'Rapid Learning', 'Leadership'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Body */}
      <article className="space-y-8">
        {/* Introduction */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">Introduction</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            After three years of hands-on field IT work — troubleshooting hardware, managing
            network infrastructure, and supporting healthcare EHR systems — I made the leap
            into software engineering through Per Scholas's 2026-RTT-23 cohort. The challenge
            was immediate: build a centralized study platform for our entire class within just
            two weeks of learning web development.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Rather than seeing this as an obstacle, I recognized it as an opportunity to apply
            the same systems thinking I used in IT infrastructure to a brand-new domain. The
            result was the Learners Hub — a responsive, data-driven web application that became
            the go-to resource for our cohort's technical articles, study tips, and shared knowledge.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">The Tech Stack</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Speed was essential. I chose a modern stack that would let me move from idea to
            deployment as fast as possible while maintaining production-quality code:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">React + Tailwind CSS</span> — for a
              component-driven, responsive UI that looks polished on every device without
              wrestling with custom CSS.
            </li>
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">Bolt</span> — as the AI-powered
              development environment that accelerated prototyping and helped me iterate on the
              architecture faster than traditional workflows.
            </li>
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">Supabase</span> — for the backend
              database, authentication, and real-time capabilities. Its PostgreSQL foundation
              gave me the relational modeling I needed for articles, categories, and user data.
            </li>
          </ul>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This combination let me go from zero to a fully deployed, live application in under
            two weeks — a timeline that would have seemed impossible without these modern tools.
          </p>
        </section>

        {/* Data Architecture */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">Data Architecture</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The real breakthrough came in how I engineered the data management and content
            ingestion pipelines. The platform needed to surface dozens of articles across
            multiple categories, and the content had to remain easy for non-technical
            contributors to update.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I designed a hybrid approach: articles are authored in Markdown for clean formatting
            and developer ergonomics, while the metadata and categorization layer is managed
            through Google Sheets. This gave the team a familiar spreadsheet interface for
            organizing content — adding tags, setting publish dates, assigning categories —
            while I handled the pipeline that ingested that data into Supabase.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This architecture meant content updates were seamless. A teammate could add a new
            article row in the shared Google Sheet, and the platform would reflect it without
            any code changes or redeployment. It was a small decision with outsized impact on
            the team's productivity.
          </p>
        </section>

        {/* Leadership & Collaboration */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">Leadership & Collaboration</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Beyond the code, this project taught me what it means to lead a technical team. I
            served as the group leader, responsible for defining the project architecture,
            assigning responsibilities, and keeping the build on track within our tight
            two-week window.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I worked closely with Redeem and Lashawnta to bring the platform to life. Together
            we established a workflow: I owned the technical architecture and data pipelines,
            while coordinating with them on content curation, UX feedback, and testing. This
            collaborative dynamic mirrored real engineering teams — code reviews, standups, and
            shared accountability.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The experience reinforced something I already knew from my IT career: great
            technology is never built in isolation. The Learners Hub succeeded because we
            combined strong technical execution with clear communication and shared ownership.
          </p>
        </section>

        {/* Conclusion */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">What I Learned</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Building the Learners Hub in my first two weeks of web development proved that my
            years in IT gave me something invaluable: the ability to think in systems. Whether
            I'm troubleshooting a network switch or architecting a React application, the
            mental model is the same — identify the components, understand how data flows
            between them, and design for reliability.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This project is just the beginning. I'm continuing to build, learn, and push into
            full-stack engineering and AI — carrying the same urgency and ownership that made
            this sprint successful.
          </p>
        </section>
      </article>
    </div>
  );
}
