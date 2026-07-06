import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  href?: string;
  onClick?: () => void;
}

export default function ArticleCard({ title, excerpt, date, tags, href, onClick }: ArticleCardProps) {
  const linkClass = "inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors";

  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-700/60 rounded-xl p-5 space-y-3 hover:border-zinc-600/80 transition-colors group">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <span className="text-[11px] font-mono text-zinc-600 whitespace-nowrap">{date}</span>
      </div>

      <p className="text-xs text-zinc-500 leading-relaxed">{excerpt}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-1">
        {href?.startsWith('/') ? (
          <Link to={href} className={linkClass} onClick={onClick}>
            Read more
            <ArrowRight className="w-3 h-3" />
          </Link>
        ) : (
          <a href={href} onClick={onClick} className={linkClass}>
            Read more
            <ArrowRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
