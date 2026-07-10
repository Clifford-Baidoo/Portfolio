export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
      <div className="w-full lg:max-w-2xl">
        <p
          className="animate-fade-up text-sm text-gray-400"
          style={{ animationDelay: "0ms" }}
        >
          <span className="text-cyan">clifford@portfolio</span>
          <span className="text-gray-600"> : </span>
          <span className="text-cyan">~</span>
          <span className="text-gray-600"> $ </span>
          whoami
          <span className="cursor-blink ml-1 text-cyan">▏</span>
        </p>

        <h1
          className="animate-fade-up mt-4 text-6xl font-bold tracking-tight text-gray-50 sm:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          Clifford Baidoo
        </h1>

        <p
          className="animate-fade-up mt-4 text-xl text-gray-400 sm:text-2xl"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-cyan">&gt;</span>Network Engineer{" "}
          <span className="text-cyan">|</span>Cybersecurity &amp; Cloud
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-gray-300 leading-relaxed"
          style={{ animationDelay: "300ms" }}
        >
          Building reliable, secure network infrastructure and keeping systems
          resilient against threats. Focused on network security, cybersecurity,
          and a growing footprint in the cloud.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            View Projects <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-cyan px-6 py-3 font-medium text-cyan transition-all hover:-translate-y-0.5 hover:bg-cyan/10"
          >
            <span aria-hidden>✉</span> Contact Me
          </a>
        </div>
      </div>
      </div>

      <div className="relative mx-auto mt-16 h-16 w-px bg-gradient-to-b from-cyan to-transparent" />
    </section>
  );
}
