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
            After three years of field IT and logistics work optimizing routing systems
            troubleshooting hardware and configuring connected devices I transitioned into
            the Per Scholas AI Enabled Healthcare IT Technician program. Being in the very
            first cohort for this specialized track my initial goal was simply to document
            the unique learner experience. However I quickly saw the urgent need to migrate
            our spread resources and shared insights into a single centralized hub leading
            me to build this platform within my first two weeks of web development. I decided
            to venture into web development because I was able to adapt to the scaling and
            overcoming many different types of debugging. I felt resilient and the process
            was incredibly rewarding.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Rather than seeing this as an obstacle I recognized it as an opportunity to apply
            the same systems thinking I used in IT infrastructure to a brand new domain. The
            result is the Learners Hub a responsive data driven web application that I hope
            becomes the go to resource for our cohort and future cohorts to centralize
            technical articles study tips and shared knowledge.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">The Tech Stack</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Speed was essential. I chose a modern stack that would let me move from idea to
            deployment as fast as possible while maintaining production quality code:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">React + Tailwind CSS</span> for a
              component driven, responsive UI that looks polished on every device without
              wrestling with custom CSS.
            </li>
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">Bolt</span> as the AI powered
              development environment that accelerated prototyping and helped me iterate on the
              architecture faster than traditional workflows.
            </li>
            <li className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">Supabase</span> for the backend
              database, authentication, and real time capabilities. Its PostgreSQL foundation
              gave me the relational modeling I needed for articles, categories, and user data.
            </li>
          </ul>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This combination let me go from zero to a fully deployed, live application in under
            two weeks, a timeline that would have seemed impossible without these modern tools.
          </p>
        </section>

        {/* Data Architecture */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">Data Architecture</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The real breakthrough came in how I engineered the data management and admin
            infrastructure. The platform needed a secure scalable way to handle content
            ingestion. I built a dedicated admin portal that acts as a centralized dashboard
            and queue for all article submissions and assigned admins. This provided a
            professional interface to review approve and manage content directly within
            the application.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            As the platform scaled I noticed overlapping logic across different components.
            To optimize the architecture I refactored the application to establish a single
            universal source of truth for each section. By centralizing the data flow I
            successfully deleted over 400 lines of redundant code. This not only made the
            codebase significantly cleaner and more performant but it solidified my
            understanding of efficient state management.
          </p>
        </section>

        {/* Leadership & Collaboration */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">Leadership & Collaboration</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Beyond the code, this project taught me what it means to lead a technical team. I
            served as the group leader, responsible for defining the project architecture,
            assigning responsibilities, and keeping the build on track within our tight
            two week window.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            While I architected and built the platform independently using Bolt, I established
            continuous feedback loops with my peers to ensure the Hub met the actual needs of
            the cohort. I released early versions of the platform to the class and rapidly
            iterated based on their UX feedback and feature requests. This dynamic mirrored
            real engineering environments where solo technical execution meets rigorous user
            testing and shared accountability.
          </p>
        </section>

        {/* Conclusion */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-200">What I Learned</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Building the Learners Hub in my first two weeks of web development proved that my
            years in IT gave me something invaluable: the ability to think in systems. Whether
            I'm troubleshooting a network switch or architecting a React application, the
            mental model is the same: identify the components, understand how data flows
            between them, and design for reliability.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This project is just the beginning. I'm continuing to build, learn, and push into
            full stack engineering and AI, carrying the same urgency and ownership that made
            this sprint successful.
          </p>
        </section>
      </article>
    </div>
  );
}
