import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Link from "next/link";

const announcements = [
  {
    tag: "Results Announced",
    title: "Selected participants for HOPES Doctoral Colloquium announced",
    href: "/hopes-conference",
    cta: "View Results",
    description: "The selected participant list is now available.",
  },
  {
    tag: "Results Announced",
    title: "Selected participants for IHEPA-Christ Summer School announced",
    href: "/summer-school",
    cta: "View Results",
    description: "The list of selected participants is now available.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Courses />
        <section className="section-padding bg-[#faf6f2]">
          <div className="container-custom">
            <div className="mb-10 max-w-3xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A36B2D]">
                Announcements
              </p>
              <h2 className="text-4xl font-bold text-primary font-serif md:text-5xl">
                Latest news and updates
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Stay up to date with the latest results, notices, and programme
                updates.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {announcements.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col rounded-2xl bg-white px-6 py-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="bg-gray-200 h-px flex-1" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all duration-300 shadow-md hover:bg-burgundy-mid active:scale-95"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
