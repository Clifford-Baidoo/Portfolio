import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  SendIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  BadgeIcon,
} from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fieldClasses =
  "w-full border border-border bg-bg px-4 py-3 text-gray-100 placeholder:text-gray-600 outline-none transition-colors focus:border-cyan";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="04" tag="contact" title="Get In Touch" />
        </Reveal>

        <Reveal delay={100}>
        <div className="border border-border bg-surface p-8">
          <p className="max-w-2xl text-gray-300 leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, a project idea, or just want to
            connect, feel free to reach out. I'll do my best to get back to
            you promptly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-gray-500">
                  <span className="text-cyan">$</span> name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={fieldClasses}
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-gray-500">
                  <span className="text-cyan">$</span> email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={fieldClasses}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span className="text-gray-500">
                <span className="text-cyan">$</span> message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Let me know what's on your mind..."
                className={`${fieldClasses} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-fit items-center gap-2 bg-cyan px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <SendIcon className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-cyan">
                <span className="text-gray-500">$</span> message sent — I'll
                get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                <span className="text-gray-500">$</span> send failed — please
                try again or email me directly at{" "}
                <a
                  href="mailto:baidooclifford56@gmail.com"
                  className="underline"
                >
                  baidooclifford56@gmail.com
                </a>
                .
              </p>
            )}
          </form>
        </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-10 text-sm text-gray-500">
            <span className="text-cyan">$</span>cat social-links.txt
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/Clifford-Baidoo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                <GitHubIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">GitHub</span>
                <span className="block text-gray-100">@Clifford-Baidoo</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/clifford-baidoo-97444a258"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                <LinkedInIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">LinkedIn</span>
                <span className="block text-gray-100">/in/clifford-baidoo</span>
              </span>
            </a>

            <a
              href="https://x.com/Mee_pMeep"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                <XIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">X</span>
                <span className="block text-gray-100">@Mee_pMeep</span>
              </span>
            </a>

            <a
              href="https://www.credly.com/users/clifford-baidoo.acd98722/badges/credly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20">
                <BadgeIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Credly</span>
                <span className="block text-gray-100">clifford-baidoo</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 border border-border bg-surface p-6 text-sm">
            <p className="text-gray-500">
              <span className="text-cyan">$</span>echo "Let's build something
              great together"
            </p>
            <p className="mt-2 text-cyan">Let's build something great together</p>
            <p className="mt-2 text-cyan">
              $ <span className="cursor-blink">▏</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
