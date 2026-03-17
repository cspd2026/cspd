"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const themesLeft = [
  "Health Systems and New Challenges",
  "Ageing and Care",
  "Gender and Health",
  "Disability Studies",
  "Issues of Equity and Financial Protection",
  "Pharmaceuticals and Access to Drugs",
];

const themesRight = [
  "Sustainable Practices in Healthcare",
  "Digitization and AI in Healthcare",
  "Mainstreaming Indigenous Medicines",
  "Health and Migration: Patients and Workers",
  "Occupational Health and Safety",
];

const importantDates = [
  { label: "Conference Announcement", value: "February 20" },
  { label: "Extended Abstract Submission", value: "April 15" },
  { label: "Selection Intimation", value: "May 15" },
  { label: "Full Paper Submission", value: "June 30" },
  { label: "Conference", value: "August 20 - 22" },
];

const submissionLinks = [
  {
    label: "Individual Presenters",
    href: "https://forms.gle/TnB1pZHJm5fuhg1s8",
  },
  {
    label: "Panel Session",
    href: "https://forms.gle/5JAu7o9MhR4JRR9R9",
  },
  {
    label: "Doctoral Colloquium",
    href: "https://forms.gle/oVSQXTYndWG34YvL9",
  },
];

const hopesImages = [
  {
    src: "https://cspdin.wordpress.com/wp-content/uploads/2026/02/cspd-discussion-2.jpg",
    alt: "Discussion session at CSPD",
  },
  {
    src: "https://cspdin.wordpress.com/wp-content/uploads/2026/03/hopes-conference-crop.png",
    alt: "HOPES Conference visual",
  },
];

export default function HopesConferencePage() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % hopesImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#24131a]">
      <Navbar />

      <main className="overflow-hidden pt-24">
        <section className="relative bg-[#5C1A2E] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-20 h-80 w-80 rounded-full border border-white/10 bg-white/5" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/10 bg-[#C8A97A]/10" />
            <div className="absolute left-1/3 top-16 h-24 w-24 rounded-full border border-white/15" />
          </div>

          <div className="container-custom relative py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                  Major Event
                </div>

                <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
                  Health: Organisation, Practice, and Emerging Strategies
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                  International Conference and Doctoral Colloquium bringing together
                  scholars, policymakers, and practitioners for a sustained dialogue on
                  health systems, equity, ageing, care, and emerging strategies in
                  healthcare.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2">
                    20-22 August 2026
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2">
                    CHRIST (Deemed to be University), Bengaluru
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#concept"
                    className="inline-flex items-center bg-[#C8A97A] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5C1A2E] transition hover:bg-[#E8D5B4]"
                  >
                    Explore Conference
                  </a>
                  <a
                    href="https://cspdin.wordpress.com/wp-content/uploads/2026/03/hopes-conference-brochure.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#5C1A2E]"
                  >
                    Open Brochure
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border-[18px] border-[#C8A97A]/20 md:block" />
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#3D111F] p-3 shadow-2xl">
                  <div className="relative aspect-[2712/1064] overflow-hidden rounded-[1.5rem]">
                    {hopesImages.map((image, index) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                          index === activeImage ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] py-16">
          <div className="container-custom grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Venue
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold text-[#5C1A2E]">
                Bangalore Central Campus
              </h2>
              <p className="mt-4 leading-relaxed text-[#5c4a50]">
                CHRIST (Deemed to be University), Hosur Road, Bengaluru - 560029,
                Karnataka, India.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Focus
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold">
                Interdisciplinary health systems dialogue
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">
                A rigorous academic platform connecting economics, social sciences,
                public health, policy, and technology around contemporary health
                challenges.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Format
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold text-[#5C1A2E]">
                Conference plus doctoral colloquium
              </h2>
              <p className="mt-4 leading-relaxed text-[#5c4a50]">
                Early-career researchers can present work in detail and receive
                feedback from domain experts through the colloquium track.
              </p>
            </div>
          </div>
        </section>

        <section id="concept" className="bg-white py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Concept Note
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Why this conference matters
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[#4f3d44]">
                <p>
                  This three-day academic conference is designed to bring together
                  scholars, policymakers, and practitioners working on global health
                  systems, ageing, equity, digitisation, pharmaceutical access,
                  indigenous medicine, migration, and AI in healthcare delivery.
                </p>
                <p>
                  The conference aims to create rigorous academic discourse on
                  health-system challenges and the latest research in social sciences,
                  while also opening space for evidence-based conversations on policy
                  and practice.
                </p>
                <p>
                  It is positioned as a platform for interdisciplinary collaboration
                  across economics, public health, and the broader social sciences so
                  that global health challenges can be discussed from multiple lenses.
                </p>
                <p>
                  Alongside the conference, the doctoral colloquium provides a focused
                  forum for young researchers to present ongoing work and receive
                  detailed feedback from experts in the field.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Important Dates
              </p>
              <div className="mt-6 space-y-3">
                {importantDates.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-4 ${
                      index % 2 === 0 ? "bg-white/8" : "bg-black/10"
                    }`}
                  >
                    <span className="text-sm font-medium text-white/85">{item.label}</span>
                    <span className="text-sm font-bold text-[#E8D5B4]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#5C1A2E]/8">
              <img
                src="https://cspdin.wordpress.com/wp-content/uploads/2026/01/community_health_worker_gives_a_vaccination_in_odisha_state_india_8380317750.jpg"
                alt="Community health worker supporting vaccination in India"
                className="h-72 w-full object-cover md:h-[28rem]"
              />
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Themes
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Conference Themes
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <ul className="space-y-3 text-[#4f3d44]">
                  {themesLeft.map((theme) => (
                    <li key={theme} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C8A97A]" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-[#4f3d44]">
                  {themesRight.map((theme) => (
                    <li key={theme} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5C1A2E]" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Speakers
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold">Speaker Line-up</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-white/80">
                The conference speaker list is being finalised.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Submission
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Submission Links
              </h2>
              <p className="mt-4 leading-relaxed text-[#4f3d44]">
                Use the links below for abstracts, panel sessions, and doctoral
                colloquium submissions.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {submissionLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-between rounded-2xl border border-[#5C1A2E]/12 bg-white px-5 py-4 text-sm font-semibold text-[#5C1A2E] transition hover:border-[#5C1A2E] hover:bg-[#fff7f9]"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                      Open
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
