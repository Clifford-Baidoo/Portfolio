import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INTERESTS = [
  "Network security & threat monitoring",
  "Linux system administration",
  "Cloud infrastructure fundamentals",
  "Open-source security tooling",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="01" tag="about" title="About Me" />
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-border bg-surface p-8 transition-colors hover:border-cyan/30">
            <div className="flex gap-4 text-gray-300 leading-relaxed">
              <span className="shrink-0 text-cyan">&gt;&gt;&gt;</span>
              <div className="space-y-4">
                <p>
                  I'm a network engineer with a strong foundation in network
                  security and cybersecurity. My work focuses on building
                  reliable infrastructure, hardening networks against threats,
                  and keeping systems monitored and resilient.
                </p>
                <p>
                  With expertise spanning routing, switching, and security
                  monitoring tools like SIEM platforms, I bridge the gap
                  between network operations and security. I'm also growing my
                  skills in cloud infrastructure, applying the same
                  security-first mindset to cloud-hosted systems.
                </p>
                <p>
                  When I'm not configuring networks or investigating security
                  events, I'm exploring new tools, contributing to open-source
                  projects, and continuously expanding my cybersecurity and
                  cloud knowledge.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6 text-sm">
              <p className="text-gray-500">
                <span className="text-cyan">$</span>cat interests.txt
              </p>
              <ul className="mt-3 space-y-2 text-gray-400">
                {INTERESTS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gray-600">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
