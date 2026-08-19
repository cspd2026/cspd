"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

const selectedParticipantsPdf = "/summer-school-selected-participants.pdf";

const summerSchoolImages = [
  "/summer-school-01.JPG",
  "/summer-school-02.JPG",
  "/summer-school-03.jpg",
  "/summer-school-04.jpg",
  "/summer-school-05.jpg",
  "/summer-school-06.jpg",
  "/summer-school-07.jpg",
  "/summer-school-08.JPG",
  "/summer-school-09.JPG",
  "/summer-school-10.JPG",
  "/summer-school-11.JPG",
  "/summer-school-12.jpg",
];

const SLOT_COUNT = 4;
const INTERVAL_MS = 4000;
const FADE_MS = 800;

const overviewCards = [
  {
    label: "Collaboration",
    title: "CSPD, Department of Economics, and IHEPA",
    description:
      "A joint academic initiative bringing together interdisciplinary scholarship, policy thinking, and applied health economics training.",
  },
  {
    label: "Audience",
    title: "Scholars, faculty, and policy-oriented researchers",
    description:
      "Designed for doctoral scholars, early-career researchers, young faculty members, and postgraduate students with a quantitative orientation.",
  },
  {
    label: "Format",
    title: "Residential, intensive, and practice-led",
    description:
      "Five days of lectures, discussions, NFHS data labs, and guided proposal development with expert feedback.",
  },
];

const thematicAreas = [
  "Foundations of Health Economics: demand, supply, and market failures",
  "Health financing, insurance, and health technology assessment",
  "Health inequalities: measurement, decomposition, and policy",
  "Economics of mental health: burden, cost-of-illness, and policy",
  "Digital health: policy architecture and health information systems",
  "NFHS data laboratory: applied empirical analysis and policy research",
];

const programmeObjectives = [
  "Conceptual grounding in core areas of health economics",
  "Health financing, insurance, and policy evaluation in India",
  "Digital health economics and the economic burden of mental health conditions",
  "Health system performance, efficiency measurement, and equity analysis",
  "Hands-on skills in NFHS data extraction, cleaning, and analysis",
  "Capacity to formulate feasible research questions and translate them into policy proposals",
];

const organisers = [
  {
    label: "Patrons",
    people: [
      "Dr Joshy K J",
      "Head, Department of Economics, CHRIST (Deemed to be University), Bengaluru",
      "Prof. Manisha Karne",
      "President, Indian Health Economics and Policy Association (IHEPA)",
    ],
  },
  {
    label: "Conveners",
    people: [
      "Dr Harilal Madhavan",
      "Director – CSPD, Associate Professor, Department of Economics",
      "Dr Mahesh E",
      "Centre for Studies in Population and Development (CSPD), CHRIST (Deemed to be University), Bengaluru",
    ],
  },
  {
    label: "Co-Convener",
    people: [
      "Md Zakaria Siddiqui",
      "Vice President, Indian Health Economics and Policy Association (IHEPA)",
    ],
  },
  {
    label: "Members",
    people: [
      "Faculty members from CSPD and the Department of Economics, CHRIST University, along with members of IHEPA.",
    ],
  },
];

export default function SummerSchoolPage() {
  const [slotIndices, setSlotIndices] = useState([0, 1, 2, 3]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);

      window.setTimeout(() => {
        setSlotIndices((prev) =>
          prev.map((idx) => (idx + SLOT_COUNT) % summerSchoolImages.length)
        );
        setFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#24131a]">
      <Navbar />

      <main className="overflow-hidden pt-24">
        <style jsx>{`
          .summer-photo-slot {
            transition: opacity 0.8s ease;
          }

          .summer-photo-slot.fading {
            opacity: 0;
          }

          .summer-photo-slot.visible {
            opacity: 1;
          }
        `}</style>

        <section className="relative bg-[#5C1A2E] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 -right-20 h-80 w-80 rounded-full border border-white/10 bg-white/5" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/10 bg-[#C8A97A]/10" />
            <div className="absolute left-1/3 top-16 h-24 w-24 rounded-full border border-white/15" />
          </div>

          <div className="container-custom relative py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                  Summer School 2026
                </div>

                <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
                  IHEPA - CHRIST Health Economics Summer School
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                  A five-day intensive academic programme designed to bridge theory,
                  policy, and empirical practice in India&apos;s rapidly evolving
                  health landscape.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2">
                    29 June - 03 July 2026
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2">
                    CHRIST University, Bengaluru Kengeri Campus
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2">
                    Residential | 30 participants
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/summer-school-program-schedule.docx"
                    download
                    className="inline-flex items-center bg-[#C8A97A] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5C1A2E] transition hover:bg-[#E8D5B4]"
                  >
                    View program schedule
                  </a>
                  <a
                    href="mailto:cspd@christuniversity.in?subject=IHEPA-CHRIST%20Health%20Economics%20Summer%20School%202026"
                    className="inline-flex items-center border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#5C1A2E]"
                  >
                    Contact Programme Team
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border-[18px] border-[#C8A97A]/20 md:block" />
                <div className="hidden lg:block">
                  <div className="grid rotate-2 grid-cols-2 gap-4 transition-transform duration-700 hover:rotate-0">
                    <div className="space-y-4">
                      <div className="relative h-48 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                        <div
                          className={`summer-photo-slot h-full w-full ${
                            fading ? "fading" : "visible"
                          }`}
                        >
                          <Image
                            src={summerSchoolImages[slotIndices[0]]}
                            alt="IHEPA-Christ Summer School session"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="relative h-64 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                        <div
                          className={`summer-photo-slot h-full w-full ${
                            fading ? "fading" : "visible"
                          }`}
                        >
                          <Image
                            src={summerSchoolImages[slotIndices[2]]}
                            alt="IHEPA-Christ Summer School classroom"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-8">
                      <div className="relative h-64 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                        <div
                          className={`summer-photo-slot h-full w-full ${
                            fading ? "fading" : "visible"
                          }`}
                        >
                          <Image
                            src={summerSchoolImages[slotIndices[1]]}
                            alt="IHEPA-Christ Summer School speaker"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="relative h-48 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                        <div
                          className={`summer-photo-slot h-full w-full ${
                            fading ? "fading" : "visible"
                          }`}
                        >
                          <Image
                            src={summerSchoolImages[slotIndices[3]]}
                            alt="IHEPA-Christ Summer School participants"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] pt-16">
          <div className="container-custom">
            <div className="rounded-[2rem] border border-[#5C1A2E]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Programme Snapshot
              </p>
              <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#5C1A2E]">
                    Five days of theory, methods, and policy translation
                  </h2>
                  <p className="mt-4 leading-relaxed text-[#5c4a50]">
                    The programme follows an approximate 60:40 split between
                    conceptual foundations and applied methods, combining lectures,
                    discussions, NFHS data labs, and group presentations with expert
                    feedback.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#5C1A2E]/10 bg-[#fff7f2] px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                      Focus
                    </p>
                    <p className="mt-3 font-semibold text-[#5C1A2E]">
                      Health economics in the Indian policy context
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#5C1A2E]/10 bg-[#faf4ee] px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                      Lab Work
                    </p>
                    <p className="mt-3 font-semibold text-[#5C1A2E]">
                      NFHS data extraction, cleaning, and analysis
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#5C1A2E]/10 bg-[#faf4ee] px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                      Certification
                    </p>
                    <p className="mt-3 font-semibold text-[#5C1A2E]">
                      Joint certificate by CHRIST University and IHEPA
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#5C1A2E]/10 bg-[#fff7f2] px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                      Attendance
                    </p>
                    <p className="mt-3 font-semibold text-[#5C1A2E]">
                      Minimum 80 percent attendance required
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[#5C1A2E] px-6 py-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                  Designed For
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Doctoral scholars, early-career researchers, young faculty members,
                  and postgraduate students building stronger research pathways in
                  health economics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] py-10 md:py-12">
          <div className="container-custom">
            <div className="rounded-[2rem] border border-[#C8A97A]/30 bg-gradient-to-r from-[#FFF8EE] via-white to-[#FCEEE7] p-6 shadow-sm ring-1 ring-[#5C1A2E]/8 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A36B2D]">
                    What&apos;s New
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-[#5C1A2E] md:text-3xl">
                    Selected participants for the IHEPA-Christ Summer School have been announced
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-[#4f3d44]">
                    The list of selected participants is now available as a downloadable
                    PDF. Please use the link below to view or download the announcement.
                  </p>
                </div>

                <a
                  href={selectedParticipantsPdf}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-[#5C1A2E] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#7D2B40]"
                >
                  View Results
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] py-16">
          <div className="container-custom grid gap-6 lg:grid-cols-3">
            {overviewCards.map((card, index) => (
              <div
                key={card.label}
                className={`rounded-[2rem] p-8 shadow-sm ${
                  index === 1
                    ? "bg-[#5C1A2E] text-white"
                    : "bg-white ring-1 ring-[#5C1A2E]/8"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.24em] ${
                    index === 1 ? "text-[#E8D5B4]" : "text-[#C8A97A]"
                  }`}
                >
                  {card.label}
                </p>
                <h2
                  className={`mt-4 font-serif text-2xl font-bold ${
                    index === 1 ? "text-white" : "text-[#5C1A2E]"
                  }`}
                >
                  {card.title}
                </h2>
                <p
                  className={`mt-4 leading-relaxed ${
                    index === 1 ? "text-white/80" : "text-[#5c4a50]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#faf6f2] py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Objectives
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold">
                What participants will gain?
              </h2>
              <ul className="mt-8 space-y-4 text-white/85">
                {programmeObjectives.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8D5B4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Themes
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Major thematic areas
              </h2>
              <p className="mt-4 leading-relaxed text-[#4f3d44]">
                The summer school moves across conceptual, empirical, and policy
                themes so participants can connect research design with real-world
                decision making.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {thematicAreas.map((theme, index) => (
                  <div
                    key={theme}
                    className={`rounded-2xl px-5 py-5 ${
                      index % 2 === 0 ? "bg-[#fff7f2]" : "bg-[#faf4ee]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-[#4f3d44]">{theme}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf6f2] py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Organising Committee
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Leadership and coordination
              </h2>
              <p className="mt-4 leading-relaxed text-[#4f3d44]">
                The summer school is anchored by CSPD, the Department of Economics at
                CHRIST (Deemed to be University), and the Indian Health Economics and
                Policy Association.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {organisers.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                    {group.label}
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-white">
                    {group.people.map((person) => (
                      <p key={person}>{person}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
