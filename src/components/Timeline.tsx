export default function Timeline({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold">{title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          {items.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  