import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const registrationFormUrl = "https://forms.gle/HNHXmzCu51zdK6Qc8";

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

const targetParticipants = [
  "Doctoral scholars and early-career researchers in economics, public policy, public health, health management, and related disciplines.",
  "Young faculty members teaching or researching health-related themes who want to deepen their empirical and policy analysis skills.",
  "Postgraduate students with a strong quantitative orientation and a clear interest in health economics and policy research.",
];

const learningOutcomes = [
  "Demonstrate conceptual clarity in health economics and contemporary policy issues, including digital health and mental health.",
  "Independently extract, clean, and analyse NFHS data and other large-scale survey datasets for health economics research.",
  "Understand health financing, equity measurement, and system-level performance evaluation in India.",
  "Prepare a short research proposal suitable for doctoral work, funded projects, or policy briefs on current health challenges.",
];

const applicationSteps = [
  {
    step: "01",
    title: "Complete the application form",
    description:
      "Share your personal details, institutional affiliation, designation, and area of research interest through the online registration form.",
  },
  {
    step: "02",
    title: "Upload a brief CV",
    description:
      "Submit a concise CV of up to two pages covering academic qualifications, institutional affiliation, teaching or research experience, and relevant publications or projects.",
  },
  {
    step: "03",
    title: "Submit a 500-word proposal",
    description:
      "Prepare a short proposal on any aspect of health economics with a clear research question, motivation, methodology, and expected contribution.",
  },
];

const importantDates = [
  { label: "Last date for submission of applications", value: "24 May 2026" },
  { label: "Confirmation / acceptance of proposals", value: "05 June 2026" },
  { label: "Last date for registration and fee payment", value: "10 June 2026" },
  { label: "Programme dates", value: "29 June - 03 July 2026" },
];

const fees = [
  { label: "Faculty Members", value: "Rs. 3,500" },
  { label: "PhD Scholars", value: "Rs. 2,500" },
  { label: "Postgraduate Students", value: "Rs. 2,000" },
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
  return (
    <div className="min-h-screen bg-white text-[#24131a]">
      <Navbar />

      <main className="overflow-hidden pt-24">
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
                    href="#apply"
                    className="inline-flex items-center bg-[#C8A97A] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5C1A2E] transition hover:bg-[#E8D5B4]"
                  >
                    Go to application section
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
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#3D111F] p-3 shadow-2xl">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f8f1e7] via-[#fffaf4] to-white p-8 text-[#24131a]">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A36B2D]">
                      Programme Snapshot
                    </p>
                    <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                      Five days of theory, methods, and policy translation
                    </h2>
                    <p className="mt-4 leading-relaxed text-[#5c4a50]">
                      The programme follows an approximate 60:40 split between
                      conceptual foundations and applied methods, combining lectures,
                      discussions, NFHS data labs, and group presentations with expert
                      feedback.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#5C1A2E]/10 bg-white px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                          Focus
                        </p>
                        <p className="mt-3 font-semibold text-[#5C1A2E]">
                          Health economics in the Indian policy context
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[#5C1A2E]/10 bg-white px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                          Lab Work
                        </p>
                        <p className="mt-3 font-semibold text-[#5C1A2E]">
                          NFHS data extraction, cleaning, and analysis
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[#5C1A2E]/10 bg-white px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                          Certification
                        </p>
                        <p className="mt-3 font-semibold text-[#5C1A2E]">
                          Joint certificate by CHRIST University and IHEPA
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[#5C1A2E]/10 bg-white px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                          Attendance
                        </p>
                        <p className="mt-3 font-semibold text-[#5C1A2E]">
                          Minimum 80 percent attendance required
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-[1.5rem] bg-[#5C1A2E] px-6 py-5 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                        Designed For
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/85">
                        Doctoral scholars, early-career researchers, young faculty
                        members, and postgraduate students building stronger research
                        pathways in health economics.
                      </p>
                    </div>
                  </div>
                </div>
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

        <section id="overview" className="bg-white py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Why Health Economics?
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Grounding research in a rapidly changing health landscape
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[#4f3d44]">
                <p>
                  Health systems across the world face mounting pressures such as
                  rising healthcare costs, inequitable access, demographic transition,
                  and shifting epidemiological burdens that demand evidence-informed
                  policy responses.
                </p>
                <p>
                  Bengaluru offers a particularly relevant setting for this summer
                  school. The city reflects both advanced tertiary-care ecosystems and
                  ongoing challenges around deprivation, migration, under-nutrition,
                  and mental health burdens in peri-urban communities.
                </p>
                <p>
                  The programme is positioned to connect theory with real policy
                  questions in India through interdisciplinary teaching, practical data
                  work, and proposal-building for future research and public action.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Practical Format
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold">
                What participants should expect?
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
                <p>
                  Residential five-day programme hosted at CHRIST University,
                  Bengaluru Kengeri Campus.
                </p>
                <p>
                  Approximate 60:40 balance between theory and applied methods.
                </p>
                <p>
                  Interactive lectures, expert-led discussions, NFHS lab sessions,
                  and group presentations.
                </p>
                <p>
                  Participants should have basic familiarity with statistics and
                  econometrics and are requested to bring their own laptops.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                    Dates
                  </span>
                  <p className="mt-2 text-base font-semibold">29 June - 03 July 2026</p>
                </div>
                <div className="rounded-2xl bg-black/10 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                    Intake
                  </span>
                  <p className="mt-2 text-base font-semibold">30 to 40 participants</p>
                </div>
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                    Venue
                  </span>
                  <p className="mt-2 text-base font-semibold">
                    CHRIST University, Bengaluru Kengeri Campus
                  </p>
                </div>
              </div>
            </div>
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

        <section className="bg-white py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Target Participants
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Who should attend?
              </h2>
              <ul className="mt-8 space-y-4 text-[#4f3d44]">
                {targetParticipants.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C8A97A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1.5rem] bg-white px-6 py-5 ring-1 ring-[#5C1A2E]/10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                  Prerequisites
                </p>
                <p className="mt-3 leading-relaxed text-[#4f3d44]">
                  Basic knowledge of statistics and econometrics, plus a strong
                  interest in health economics and policy research. Participants are
                  requested to bring their own laptops.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Learning Outcomes
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold">
                What participants will be able to do?
              </h2>
              <ul className="mt-8 space-y-4 text-white/85">
                {learningOutcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8D5B4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="apply" className="bg-[#faf6f2] py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                How To Apply?
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Application checklist
              </h2>
              <div className="mt-8 space-y-4">
                {applicationSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[1.5rem] border border-[#5C1A2E]/10 bg-[#fcfbfa] px-6 py-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#5C1A2E] text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[#5C1A2E]">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-[#4f3d44]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[#5C1A2E] px-6 py-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                  Submission Note
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Combine all application documents into a single PDF and submit your
                  details through the registration form linked below. The listed
                  contact emails remain available for application support and
                  programme queries.
                </p>
                <div className="mt-5">
                  <a
                    href={registrationFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#C8A97A] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5C1A2E] transition hover:bg-[#E8D5B4]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
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
                      <span className="text-sm font-medium text-white/85">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-[#E8D5B4]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#5C1A2E]/8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                  Selection Process
                </p>
                <p className="mt-4 leading-relaxed text-[#4f3d44]">
                  Applications will be reviewed by the Programme Committee based on
                  the quality of the research proposal, relevance of the candidate&apos;s
                  academic background to health economics, and institutional diversity.
                </p>
                <p className="mt-4 leading-relaxed text-[#4f3d44]">
                  Preference will be given to early-career researchers, doctoral
                  scholars, and young faculty members. Selected candidates will be
                  notified by email on or before 05 June 2026.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                  Contact
                </p>
                <div className="mt-4 space-y-3 text-[#4f3d44]">
                  <p>
                    <a
                      href="mailto:cspd@christuniversity.in"
                      className="font-semibold text-[#5C1A2E] hover:text-[#7D2B40]"
                    >
                      cspd@christuniversity.in
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:secretary.ihepa@gmail.com"
                      className="font-semibold text-[#5C1A2E] hover:text-[#7D2B40]"
                    >
                      secretary.ihepa@gmail.com
                    </a>
                  </p>
                  <p className="pt-2 text-sm leading-relaxed">
                    These
                    contacts can be used for application support and programme
                    queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] bg-[#5C1A2E] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                Registration Fees
              </p>
              <div className="mt-8 grid gap-4">
                {fees.map((item, index) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl px-5 py-5 ${
                      index === 1 ? "bg-black/10" : "bg-white/8"
                    }`}
                  >
                    <p className="text-sm text-white/80">{item.label}</p>
                    <p className="mt-2 text-2xl font-bold text-[#E8D5B4]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/8 px-5 py-4">
                <p className="text-sm font-semibold text-white">Note</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  3-tier AC fare will be provided for all selected participants.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#fcfbfa] p-8 ring-1 ring-[#5C1A2E]/10 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                Practical Information
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#5C1A2E]">
                Fees, logistics, and participation requirements
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[#4f3d44]">
                <p>
                  Registration fees cover programme materials, certificates,
                  refreshments, and meals for all five days, including breakfast,
                  lunch, and dinner.
                </p>
                <p>
                  Accommodation is available on a payment basis at the University
                  guest house or nearby hotels.
                </p>
                <p>
                  Participants who complete the programme with the required minimum
                  attendance will receive a joint certificate from CHRIST University
                  and IHEPA.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white px-5 py-5 ring-1 ring-[#5C1A2E]/10">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                    Certification
                  </p>
                  <p className="mt-3 font-semibold text-[#5C1A2E]">
                    Joint certificate by CHRIST University and IHEPA
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-5 py-5 ring-1 ring-[#5C1A2E]/10">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A97A]">
                    Attendance
                  </p>
                  <p className="mt-3 font-semibold text-[#5C1A2E]">
                    Minimum 80 percent attendance required
                  </p>
                </div>
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
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/85">
                    {group.people.map((person) => (
                      <p key={person}>{person}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#5C1A2E] py-16 text-white">
          <div className="container-custom rounded-[2rem] border border-white/10 bg-[#3D111F] px-8 py-10 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D5B4]">
                  Ready To Apply?
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
                  Build stronger health economics research with theory, data, and
                  policy focus in one place.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/80">
                  Use the brochure deadlines above, prepare your CV and short
                  proposal, and complete your registration through the online form.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href={registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#C8A97A] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5C1A2E] transition hover:bg-[#E8D5B4]"
                >
                  Apply Now
                </a>
                <a
                  href="mailto:cspd@christuniversity.in?subject=Summer%20School%202026%20Application"
                  className="inline-flex items-center border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#5C1A2E]"
                >
                  Email CSPD
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
