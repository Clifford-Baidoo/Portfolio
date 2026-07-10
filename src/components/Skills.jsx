import {
  NetworkIcon,
  ServerIcon,
  ShieldIcon,
  CloudIcon,
} from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  {
    icon: NetworkIcon,
    title: "Networking",
    dir: "networking",
    tags: ["TCP/IP", "DHCP", "DNS", "Routing", "Switching", "VPN"],
  },
  {
    icon: ShieldIcon,
    title: "Security",
    dir: "security",
    tags: ["Network Security", "SIEM (Wazuh)", "Vulnerability Assessment", "Firewalls", "IDS/IPS", "Incident Response"],
  },
  {
    icon: ServerIcon,
    title: "Systems",
    dir: "systems",
    tags: ["Linux", "Ubuntu/Debian", "Bash", "Shell Scripting", "System Admin", "Docker"],
  },
  {
    icon: CloudIcon,
    title: "Cloud",
    dir: "cloud",
    tags: ["AWS", "Cloud Networking", "Virtualization (Proxmox)", "IAM Basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="02" tag="skills" title="Technical Skills" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map(({ icon: Icon, title, dir, tags }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-bg px-3 py-1 text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 border-t border-border pt-4 text-sm text-gray-500">
                  <span className="text-cyan">$</span>ls {dir}/
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
