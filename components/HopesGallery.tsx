"use client";

import { useRef, useState } from "react";

const photos = [
  { src: "/hopes-day1-01.webp", day: 1, alt: "Conference guests gather at HOPES 2026" },
  { src: "/hopes-day1-02.webp", day: 1, alt: "A moment from the first day of HOPES 2026" },
  { src: "/hopes-day1-03.webp", day: 1, alt: "Participants at HOPES 2026" },
  { src: "/hopes-day1-04.webp", day: 1, alt: "A session during HOPES 2026" },
  { src: "/hopes-day1-05.webp", day: 1, alt: "Speakers and participants at HOPES 2026" },
  { src: "/hopes-day1-06.webp", day: 1, alt: "HOPES 2026 conference proceedings" },
  { src: "/hopes-day1-07.webp", day: 1, alt: "Participants take part in HOPES 2026" },
  { src: "/hopes-day2-01.webp", day: 2, alt: "A moment from the second day of HOPES 2026" },
  { src: "/hopes-day2-02.webp", day: 2, alt: "HOPES 2026 day two session" },
  { src: "/hopes-day2-03.webp", day: 2, alt: "Researchers meet at HOPES 2026" },
  { src: "/hopes-day2-04.webp", day: 2, alt: "A presentation at HOPES 2026" },
  { src: "/hopes-day2-05.webp", day: 2, alt: "Participants attend HOPES 2026" },
  { src: "/hopes-day2-06.webp", day: 2, alt: "HOPES 2026 conference session" },
  { src: "/hopes-day2-07.webp", day: 2, alt: "Speakers at the HOPES 2026 conference" },
  { src: "/hopes-day2-08.webp", day: 2, alt: "HOPES 2026 participants in discussion" },
  { src: "/hopes-day2-09.webp", day: 2, alt: "A scene from HOPES 2026 day two" },
  { src: "/hopes-day2-10.webp", day: 2, alt: "Conference activities at HOPES 2026" },
  { src: "/hopes-day2-11.webp", day: 2, alt: "Researchers at HOPES 2026" },
  { src: "/hopes-day2-12.webp", day: 2, alt: "HOPES 2026 talk and discussion" },
  { src: "/hopes-day2-13.webp", day: 2, alt: "A gathering during HOPES 2026" },
  { src: "/hopes-day2-14.webp", day: 2, alt: "HOPES 2026 day two proceedings" },
  { src: "/hopes-day2-15.webp", day: 2, alt: "Participants at the HOPES 2026 conference" },
  { src: "/hopes-day3-01.webp", day: 3, alt: "A moment from the final day of HOPES 2026" },
  { src: "/hopes-day3-02.webp", day: 3, alt: "HOPES 2026 day three session" },
  { src: "/hopes-day3-03.webp", day: 3, alt: "Conference participants on day three of HOPES 2026" },
  { src: "/hopes-day3-04.webp", day: 3, alt: "A presentation on the final day of HOPES 2026" },
  { src: "/hopes-day3-05.webp", day: 3, alt: "HOPES 2026 conference gathering" },
  { src: "/hopes-day3-06.webp", day: 3, alt: "Researchers at the HOPES 2026 conference" },
  { src: "/hopes-day3-07.webp", day: 3, alt: "Closing moments of HOPES 2026" },
  { src: "/hopes-day3-08.webp", day: 3, alt: "Participants celebrate the close of HOPES 2026" },
  { src: "/hopes-day3-09.webp", day: 3, alt: "The final day of HOPES 2026" },
  { src: "/hopes-day3-10.webp", day: 3, alt: "HOPES 2026 conference participants" },
  { src: "/hopes-day3-11.webp", day: 3, alt: "A discussion from the final day of HOPES 2026" },
  { src: "/hopes-day3-12.webp", day: 3, alt: "Closing session of HOPES 2026" },
];

export default function HopesGallery() {
  const [active, setActive] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const photo = photos[active];
  const selectPhoto = (index: number) => {
    setActive(index);
    thumbnailRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  const move = (direction: number) => selectPhoto((active + direction + photos.length) % photos.length);

  return (
    <section aria-labelledby="hopes-gallery-title" className="bg-[#3D111F] text-white">
      <div className="container-custom grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D8B985]">
            Three days of ideas and connection
          </p>
          <h2 id="hopes-gallery-title" className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            HOPES Conference 2026
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
            A look back at the conversations, research, and people who made this year’s conference special.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3" aria-label="Choose conference day">
            {[1, 2, 3].map((day) => {
              const firstPhoto = photos.findIndex((item) => item.day === day);
              const selected = photo.day === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => selectPhoto(firstPhoto)}
                  aria-pressed={selected}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${selected ? "border-[#D8B985] bg-[#D8B985] text-[#3D111F]" : "border-white/30 text-white hover:border-white"}`}
                >
                  Day {day}
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-sm font-medium text-white/65" aria-live="polite">
            Day {photo.day} <span className="mx-2 text-[#D8B985]">·</span> Photo {active + 1} of {photos.length}
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-2xl transition hover:bg-white hover:text-[#3D111F]">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next photo" className="grid h-12 w-12 place-items-center rounded-full bg-[#D8B985] text-2xl text-[#3D111F] transition hover:bg-white">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[640px]">
          <div className="mx-auto flex h-[240px] w-full max-w-[640px] items-center justify-center overflow-hidden rounded-2xl bg-black/25 sm:h-[320px] lg:h-[360px]">
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="block h-full w-full object-contain p-2"
            />
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Choose a photo">
            {photos.map((item, index) => (
              <button ref={(node) => { thumbnailRefs.current[index] = node; }} key={item.src} type="button" onClick={() => selectPhoto(index)} aria-label={`Show photo ${index + 1}, day ${item.day}`} aria-current={index === active ? "true" : undefined} className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${index === active ? "border-[#D8B985] opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <img src={item.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
