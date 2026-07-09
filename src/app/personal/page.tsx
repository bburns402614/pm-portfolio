import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get to Know Me | Breanna Burns",
  description: "Beyond the resume: personality type, family life, and what makes me tick.",
};

const dimensions = [
  { letter: "E", word: "Extraverted", description: "Energized by people and conversation" },
  { letter: "N", word: "Intuitive", description: "Sees patterns and possibilities over surface details" },
  { letter: "F", word: "Feeling", description: "Leads with empathy and values" },
  { letter: "P", word: "Prospecting", description: "Flexible, curious, open to where ideas lead" },
];

const strengths = [
  "Infectious enthusiasm",
  "Deep empathy",
  "Creative problem-solving",
  "Connecting people and ideas",
  "Imagining what could be",
  "Making others feel heard",
];

export default function Personal() {
  return (
    <div className="bg-background">
      {/* Page hero */}
      <div className="bg-grain border-b border-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Beyond the Resume</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Get to Know Me
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-xl leading-8">
              Work is a big part of who I am, but it&apos;s not all of it.
              Here&apos;s a little more of the full picture.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl space-y-20">

          {/* Personality type */}
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center rounded-full bg-accent text-white text-sm font-bold px-3 py-1 tracking-wide">
                ENFP
              </span>
              <span className="text-sm font-medium text-ink-soft">The Campaigner</span>
              <a
                href="https://www.16personalities.com/enfp-personality"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink-faint hover:text-accent transition-colors"
              >
                16personalities.com ↗
              </a>
            </div>

            <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-5">
              My Personality Type
            </h2>

            <p className="text-ink-soft leading-8 text-lg">
              I&apos;m an ENFP, or as 16personalities describes it:{" "}
              <span className="text-ink font-medium">
                &ldquo;an enthusiastic, creative, and sociable free spirit who can always find a reason to smile.&rdquo;
              </span>{" "}
              That tracks pretty well.
            </p>

            <p className="mt-4 text-ink-soft leading-8">
              ENFPs see everything as interconnected: people, ideas, problems, possibilities. I&apos;m the
              person who starts a conversation about onboarding drop-off and ends up connecting it to
              behavioral economics and a book I read two years ago. It can be a lot, but it&apos;s also
              where my best product thinking comes from.
            </p>

            <p className="mt-4 text-ink-soft leading-8">
              I lead with empathy, which shows up most in discovery. I genuinely want to understand
              <em className="not-italic text-ink"> why</em> a user did what they did, not just what they
              did. And I get energized by the early, messy part of a problem before the solution is obvious:
              the brainstorm, the stakeholder alignment, the moment when scattered signals start to form a pattern.
            </p>

            {/* ENFP dimension cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {dimensions.map((d) => (
                <div
                  key={d.letter}
                  className="rounded-xl border border-line bg-paper p-4 hover:border-accent/30 hover:shadow-sm transition-all duration-200"
                >
                  <p className="font-heading font-bold text-2xl text-accent">{d.letter}</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{d.word}</p>
                  <p className="mt-1 text-xs text-ink-soft leading-5">{d.description}</p>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="mt-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-faint mb-4">
                Core Strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="bg-accent-soft text-accent text-sm font-medium px-3 py-1.5 rounded-full border border-accent/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="border-t border-line" />

          {/* Personal life */}
          <Reveal>
            <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-5">
              Life Outside Work
            </h2>

            <p className="text-ink-soft leading-8 text-lg">
              Married, two dogs, and a toddler named Leo who has strong opinions about everything.
              Home is chaotic and I wouldn&apos;t change it.
            </p>

            <p className="mt-4 text-ink-soft leading-8">
              When I&apos;m not working, I&apos;m usually knee-deep in a home renovation project, out
              in the garden, or at my ceramics wheel. Hobbyist ceramicist is a title I wear proudly.
              There&apos;s something about making something with your hands that completely resets your brain.
            </p>

            <p className="mt-4 text-ink-soft leading-8">
              We&apos;re Columbus people through and through. I went to Ohio State and genuinely love
              this city. A big chunk of our weekends goes toward finding places that work for a toddler
              and two dogs at the same time, which is more of a research project than it sounds.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { src: "/personal/leo.jpg", caption: "Leo", alt: "Leo" },
                { src: "/personal/dogs.jpg", caption: "The bosses", alt: "Our dogs" },
                { src: "/personal/ceramics.jpg", caption: "Ceramics", alt: "Ceramics work" },
                { src: "/personal/home.jpg", caption: "Columbus life", alt: "Home and garden" },
              ].map((photo) => (
                <div
                  key={photo.alt}
                  className="group relative overflow-hidden rounded-2xl bg-muted"
                  style={{ aspectRatio: "1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
