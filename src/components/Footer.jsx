export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-sm text-gray-500 sm:flex-row sm:justify-between">
        <p>
          <span className="text-cyan">&gt;_</span> ~/clifford/portfolio
        </p>
        <p>
          <span className="text-cyan">$</span>echo $USER
        </p>
        <p>© {year} Clifford Kingsley Baidoo</p>
      </div>
    </footer>
  );
}
