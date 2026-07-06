import type { LucideIcon } from 'lucide-react';

interface BannerProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Banner({ icon: Icon, title, subtitle, children }: BannerProps) {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-700/60 rounded-2xl p-6">
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="space-y-1 min-w-0">
          <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
          <p className="text-sm text-zinc-400">{subtitle}</p>
        </div>
      </div>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
