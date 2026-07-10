import { GitHubIcon, ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "High-Availability Proxmox Virtualization Cluster",
    tagline:
      "Consolidated server workloads onto a resilient, self-healing virtualization platform.",
    description:
      "Designed, deployed, and administer a multi-node Proxmox VE cluster that hosts the organization's virtual server infrastructure. Configured the cluster for high availability so workloads fail over automatically between nodes, minimizing downtime. Responsibilities span VM/container provisioning, resource allocation, backups, patching, and ongoing performance maintenance.",
    highlights: [
      "Consolidated multiple physical servers into managed virtual infrastructure",
      "Configured automatic failover across cluster nodes for resilience",
      "Centralized backups, patching, and resource management",
    ],
    tech: ["Proxmox VE", "KVM / LXC", "Linux", "Cluster HA", "Virtualization"],
    category: "Infrastructure",
    links: {},
  },
  {
    title: "Centralized Security Monitoring with Wazuh",
    tagline:
      "Deployed SIEM/XDR-style threat detection and log analysis across the server estate.",
    description:
      "Implemented Wazuh to provide continuous security monitoring across servers and endpoints. Deployed agents, aggregated and analyzed logs, and used dashboards to surface suspicious activity, giving the team centralized visibility into security events and a foundation for incident response.",
    highlights: [
      "Centralized visibility into security events across servers and endpoints",
      "Faster detection of anomalies through log aggregation and alerting",
      "Established a foundation for structured incident response",
    ],
    tech: ["Wazuh", "SIEM / XDR", "Linux", "Log Analysis", "Endpoint Monitoring"],
    category: "Security",
    links: {},
  },
  {
    title: "Secure Team Credential Management with Passbolt",
    tagline:
      "Replaced insecure credential-sharing with a self-hosted, access-controlled password manager.",
    description:
      "Stood up a self-hosted Passbolt instance to give the team a secure way to store and share credentials, replacing ad-hoc and insecure sharing practices. Configured role-based access and onboarded team members, improving both security posture and auditability.",
    highlights: [
      "Eliminated insecure ad-hoc credential sharing",
      "Introduced role-based access to shared secrets",
      "Improved auditability of credential access",
    ],
    tech: ["Passbolt", "Self-Hosted", "Linux / Docker", "Access Control"],
    category: "Security",
    links: {},
  },
  {
    title: "Enterprise Switch & Network Management",
    tagline:
      "Configured and troubleshot managed switches to keep campus connectivity reliable.",
    description:
      "Handle managed-switch configuration, VLAN setup, and network fault diagnosis across the campus environment, resolving connectivity issues to maintain stable, efficient service. Also perform server access-restoration and password-recovery procedures to regain administrative control without data loss.",
    highlights: [
      "Maintained reliable campus-wide network connectivity",
      "Diagnosed and resolved network faults across the environment",
      "Restored server administrative access without data loss",
    ],
    tech: ["Managed Switches", "VLANs", "Network Troubleshooting", "Linux"],
    category: "Networking",
    links: {},
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="03" tag="projects" title="Featured Projects" />
        </Reveal>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-cyan/80">{project.tagline}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="border border-border bg-bg px-3 py-1 text-xs uppercase tracking-wide text-gray-500">
                      {project.category}
                    </span>
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        aria-label="GitHub repository"
                        className="text-gray-500 transition-colors hover:text-cyan"
                      >
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        aria-label="Live demo"
                        className="text-gray-500 transition-colors hover:text-cyan"
                      >
                        <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 text-sm">
                  <p className="text-gray-500">
                    <span className="text-cyan">$</span>cat highlights.txt
                  </p>
                  <ul className="mt-2 space-y-1.5 text-gray-400">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gray-600">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="border border-cyan/30 bg-cyan/10 px-3 py-1 text-sm text-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
