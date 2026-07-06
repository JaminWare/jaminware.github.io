import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Learners Hub',
    description:
      'A comprehensive web platform developed to centralize technical articles, study tips, and resources for the 2026 RTT 23 Per Scholas cohort. I engineered data management pipelines and integrated a clean, high tech UI to streamline peer collaboration all built within my first two weeks of learning web development.',
    tags: ['Bolt', 'React', 'Tailwind CSS', 'Supabase'],
    status: 'Live',
    liveHref: 'https://jaminware.github.io/Per-Scholas-Knowledge-Hub/',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-zinc-100">Projects</h1>
        <p className="text-sm text-zinc-500">A collection of things I've built and contributed to.</p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="card-gradient rounded-xl p-6 space-y-4 hover:border-zinc-600/80 transition-colors group"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-zinc-200 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 whitespace-nowrap">
                {project.status}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 text-white text-xs font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
