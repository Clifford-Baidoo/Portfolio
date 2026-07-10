export default function SectionHeading({ number, tag, title }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span>
          {number}. <span className="text-cyan">{tag}</span>
        </span>
        <span className="h-px flex-1 max-w-xs bg-gradient-to-r from-cyan/40 to-transparent" />
      </div>
      <h2 className="mt-2 text-4xl font-bold text-gray-50">{title}</h2>
    </div>
  );
}
