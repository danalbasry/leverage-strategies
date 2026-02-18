interface KeyTakeawaysProps {
  takeaways: string[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  return (
    <div className="rounded-lg border border-gray-border bg-gray-bg p-6 lg:p-8 mb-10">
      <h3 className="font-bold text-heading text-lg mb-4">
        Key Takeaways
      </h3>
      <ol className="space-y-3">
        {takeaways.map((takeaway, i) => (
          <li key={i} className="flex gap-3 text-body">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-accent text-xs font-bold text-white">
              {i + 1}
            </span>
            <span className="leading-relaxed text-sm">{takeaway}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
