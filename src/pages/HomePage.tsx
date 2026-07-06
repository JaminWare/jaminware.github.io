import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactForm, ArticleCard } from '../components';

const skills = [
  'Hardware Troubleshooting', 'TCP/IP Networking', 'IT Support',
  'React', 'Tailwind CSS', 'Supabase', 'Bolt',
];

const stats = [
  { value: '3+', label: 'Field IT & Logistics Experience' },
  { value: 'Passed', label: 'CompTIA A+ Core 1, Score: 814' },
  { value: '100%', label: 'Healthcare IT Compliance' },
];

export default function HomePage() {
  return (
    <div className="max-w-3xl space-y-10">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-sky-400">Hello, I'm Jamin</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
            IT Professional &{' '}
            <span className="text-gradient">Healthcare IT Technician</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            Expanding into modern web development and AI engineering. I bring 3+ years of
            hands on field IT, networking, and logistics experience to every project I build.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Code2 className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="card-gradient rounded-xl p-5">
            <p className="text-2xl font-bold text-gradient">{value}</p>
            <p className="text-xs text-zinc-500 mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* Featured Article */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Featured</h2>
        <ArticleCard
          title="From IT Support to Full Stack: My First Two Weeks Building the Learners Hub"
          excerpt="A deep dive into how I leveraged my IT systems background to architect and deploy a centralized study platform for my cohort within my first two weeks of web development."
          date="July 2026"
          tags={['Full Stack', 'React', 'Rapid Learning']}
          href="/article/learners-hub"
        />
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Get in Touch</h2>
        <ContactForm />
      </section>
    </div>
  );
}
