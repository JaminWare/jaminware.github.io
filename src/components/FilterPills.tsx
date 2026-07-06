interface FilterItem {
  label: string;
  value: string;
}

interface FilterPillsProps {
  items: FilterItem[];
  activeValue: string;
  onChange: (value: string) => void;
}

export default function FilterPills({ items, activeValue, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const isActive = item.value === activeValue;
        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              isActive
                ? 'bg-sky-500/30 text-sky-300 border border-sky-500/40'
                : 'text-zinc-500 hover:text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 hover:border-zinc-600'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
