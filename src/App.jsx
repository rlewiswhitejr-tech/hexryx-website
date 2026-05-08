import React from "react";
import { Shield, Brain, FileText, CheckCircle, Mail, Lock, Radar, User } from "lucide-react";
import { motion } from "framer-motion";

export default function HexryxWebsite() {
  const services = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Phishing Awareness Training",
      desc: "Beginner-friendly guides that help employees recognize suspicious emails, fake login pages, QR scams, and social engineering tactics.",
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "AI-Assisted Cybersecurity Content",
      desc: "Security awareness materials created with AI support, reviewed through a cybersecurity lens, and organized for small business use.",
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Cyber Hygiene Checklists",
      desc: "Simple security checklists covering passwords, MFA, safe browsing, device updates, reporting suspicious activity, and basic risk reduction.",
    },
    {
      icon: <Radar className="h-7 w-7" />,
      title: "Security Operations Education",
      desc: "Practical content connected to SIEM monitoring, log review, threat detection concepts, and incident response awareness.",
    },
  ];

  const checklist = [
    "Verify sender addresses before clicking links",
    "Use strong, unique passwords and MFA",
    "Report suspicious emails quickly",
    "Avoid downloading unexpected attachments",
    "Check URLs before entering credentials",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-950 to-purple-700/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/15 p-2 ring-1 ring-cyan-300/30">
                <Lock className="h-7 w-7 text-cyan-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Hexryx</span>
            </div>
            <a href="#contact" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300">
              Contact
            </a>
          </nav>

          <div className="grid gap-12 py-20 md:grid-cols-2 md:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                AI-Assisted Cybersecurity Awareness
              </p>
              <h1 className="text-5xl font-black leading-tight md:text-6xl">
                Helping people spot phishing before attackers win.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Hexryx creates practical cybersecurity awareness resources for individuals and small businesses, including phishing guides, cyber hygiene checklists, and AI-supported security education.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#guide" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200">
                  View Phishing Guide
                </a>
                <a href="#services" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  Services
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10">
                <div className="mb-4 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-cyan-300" />
                  <h2 className="text-2xl font-bold">Phishing Readiness Snapshot</h2>
                </div>
                <div className="space-y-4">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-800/70 p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                      <p className="text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">What Hexryx Does</p>
          <h2 className="mt-3 text-4xl font-black">Cybersecurity awareness made simple.</h2>
          <p className="mt-4 text-slate-300">
            Built for small businesses, students, and everyday users who need clear, practical security guidance without confusing technical language.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="guide" className="bg-slate-900/70 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Featured Resource</p>
            <h2 className="mt-3 text-4xl font-black">Phishing Awareness Guide 2026</h2>
            <p className="mt-5 leading-8 text-slate-300">
              A practical training guide covering email red flags, fake login pages, smishing, QR code scams, password safety, and what to do after clicking a suspicious link.
            </p>
            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="font-semibold text-cyan-100">Portfolio note:</p>
              <p className="mt-2 text-slate-300">
                This project demonstrates AI-assisted content development, cybersecurity awareness, documentation, and security education skills.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold">Guide Includes</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-cyan-300" />Common phishing tactics</li>
              <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-cyan-300" />Fake email examples</li>
              <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-cyan-300" />Employee security checklist</li>
              <li className="flex gap-3"><CheckCircle className="h-6 w-6 text-cyan-300" />AI and cybersecurity awareness</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="rounded-3xl bg-cyan-300/10 p-5 text-cyan-300">
              <User className="h-12 w-12" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Founder</p>
              <h2 className="mt-2 text-3xl font-black">Ronald White Jr.</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                U.S. Army veteran, former Tactical Data Systems Specialist, and cybersecurity graduate student at North Carolina A&T State University. Focused on SIEM operations, threat detection, security awareness, and AI-assisted cybersecurity solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-cyan-400 p-10 text-slate-950 shadow-2xl shadow-cyan-500/20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black">Build safer habits before a breach happens.</h2>
              <p className="mt-4 text-lg text-slate-800">
                Use Hexryx as a cybersecurity portfolio project, small business awareness page, or foundation for future consulting services.
              </p>
            </div>
            <div className="md:text-right">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-bold text-white hover:bg-slate-800">
                <Mail className="h-5 w-5" /> Contact Hexryx
              </a>
              <p className="mt-3 text-sm text-slate-700">Replace this email with your real contact email.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Hexryx. AI-assisted cybersecurity awareness and education.
      </footer>
    </main>
  );
}
