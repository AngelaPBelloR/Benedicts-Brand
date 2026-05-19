import { useState } from "react";

const YELLOW = "#f5b61a";
const P = "'Poppins', sans-serif";

import chicagodictineImg from "@/assets/images/Chicagodictine.jpg";
import benedicteaImg from "@/assets/images/Benedicteca.jpg";
import benecheesdictineImg from "@/assets/images/Benecheesdictine.jpg";
import beneluacdictineImg from "@/assets/images/Beneluacdictine.jpg";
import benedigivingImg from "@/assets/images/Benedigiving.jpg";

const NAV_LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#colors", label: "Colors" },
  { href: "#type", label: "Typography" },
  { href: "#collection", label: "Collection" },
  { href: "#voice", label: "Voice" },
  { href: "#usage", label: "Usage" },
];

const DISHES = [
  {
     img: chicagodictineImg,
    name: "Chicagodictine",
    subtitle: "The Deep Dish Edition",
    desc: "Bold, layered, unapologetic. A Chicago tribute stacked with Italian beef, giardiniera, and a poached egg that earns its place.",
  },
  {
     img: benedicteaImg,
    name: "Benedicteca",
    subtitle: "The Library Edition",
    desc: "Quiet, considered, precise. Smoked salmon, crème fraîche, and a dill hollandaise that rewards patience.",
  },
  {
     img: benecheesdictineImg,
    name: "Benecheesdictine",
    subtitle: "The Grilled Cheese Edition",
    desc: "Comfort elevated. A toasted cheese melt beneath the classic egg and sauce — familiar made extraordinary.",
  },
  {
     img: beneluacdictineImg,
    name: "Beneluacdictine",
    subtitle: "The Luau Edition",
    desc: "Bright and tropical. Kalua pork, pineapple salsa, and a coconut hollandaise that surprises every time.",
  },
  {
     img: benedigivingImg,
    name: "Benedigiving",
    subtitle: "The Thanksgiving Edition",
    desc: "Seasonal and celebratory. Roast turkey, cranberry miso, and sage brown butter hollandaise on a cornbread muffin.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDish, setActiveDish] = useState(0);

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: P }}>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between max-w-screen-2xl mx-auto">
          <a
            href="#top"
            className="font-black text-black text-sm tracking-[0.15em] uppercase"
            style={{ fontWeight: 900 }}
          >
            Benedict Eggs
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-black tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors duration-200"
                style={{ fontWeight: 900 }}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/5 px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-black tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors"
                style={{ fontWeight: 900 }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero — white + gold split, matching Slide 1 ── */}
      <section id="top" className="pt-14">
        <div
          className="bg-white flex items-center justify-center px-8"
          style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}
        >
          <h1
            className="text-black text-center leading-none"
            style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(3rem, 9vw, 8.5rem)", lineHeight: 1.0 }}
          >
            Brand<br />Guidelines
          </h1>
        </div>
        <div
          className="flex flex-col items-center justify-center px-8"
          style={{
            backgroundColor: YELLOW,
            paddingTop: "clamp(3.5rem, 8vw, 7rem)",
            paddingBottom: "clamp(3.5rem, 8vw, 7rem)",
          }}
        >
          <h2
            className="text-white text-center leading-none"
            style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 1.0, marginBottom: "1rem" }}
          >
            Benedict Eggs
          </h2>
          <p
            className="text-black text-center"
            style={{ fontFamily: P, fontWeight: 600, fontStyle: "italic", fontSize: "clamp(0.9rem, 2.2vw, 1.75rem)" }}
          >
            Transliteration Recipes
          </p>
        </div>
      </section>

      {/* ── Brand Mission ── */}
      <section id="mission" className="bg-white px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="md:sticky md:top-24">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: YELLOW, fontWeight: 900 }}>
              01 — Mission
            </span>
            <h2
              className="text-black leading-none"
              style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}
            >
              Who<br />We Are
            </h2>
          </div>
          <div className="space-y-8">
            <p
              className="text-black leading-snug"
              style={{ fontFamily: P, fontWeight: 600, fontStyle: "italic", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
            >
              "We believe in bold flavors, honest ingredients, and the poetry of transformation."
            </p>
            <div className="h-0.5 w-12" style={{ backgroundColor: YELLOW }} />
            <p className="text-black/60 text-base md:text-lg leading-relaxed">
              Benedict Eggs is the flagship series of Transliteration Recipes — a culinary project dedicated to re-reading classic dishes through a fresh, uncompromising lens. Every recipe is a transliteration: the spirit of the original, rewritten in a new voice.
            </p>
            <p className="text-black/60 text-base md:text-lg leading-relaxed">
              Our brand stands for clarity without compromise. Golden, direct, and confident — we do not over-explain. We let the food speak for itself, and we trust the cook to follow through.
            </p>

            {/* Brand wordmark display block */}
            <div
              className="w-full flex items-center justify-center py-16"
              style={{ backgroundColor: "#000" }}
            >
              <div className="text-center">
                <p
                  className="text-white leading-none"
                  style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.0 }}
                >
                  Benedict Eggs
                </p>
                <p
                  className="mt-3"
                  style={{ fontFamily: P, fontWeight: 600, fontStyle: "italic", fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)", color: YELLOW }}
                >
                  Transliteration Recipes
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Bold", "Honest", "Direct", "Golden"].map((word) => (
                <span
                  key={word}
                  className="px-4 py-2 text-xs font-black tracking-[0.2em] uppercase text-black"
                  style={{ fontWeight: 900, backgroundColor: YELLOW }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Color Palette ── */}
      <section id="colors" className="bg-black px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: YELLOW, fontWeight: 900 }}>
              02 — Color Palette
            </span>
            <h2 className="text-white leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}>
              Three<br />Colors. Full Stop.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border border-white/10">
            {[
              { name: "Brand Gold", hex: "#F5B61A", rgb: "245, 182, 26", bg: YELLOW, note: "Primary — heroes, highlights, calls to action." },
              { name: "Ink Black", hex: "#000000", rgb: "0, 0, 0", bg: "#000000", note: "Text, structure, contrast backgrounds." },
              { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255", bg: "#ffffff", note: "Page ground, reverse text, breathing room." },
            ].map(({ name, hex, rgb, bg, note }, i) => (
              <div key={name} className={i === 1 ? "border-x border-white/10" : ""}>
                <div className="h-56 md:h-72 w-full" style={{ backgroundColor: bg }} />
                <div className="p-6 border-t border-white/10">
                  <p className="text-white font-black text-xl mb-1" style={{ fontWeight: 900 }}>{name}</p>
                  <p className="text-white/40 text-xs font-mono tracking-wider">{hex}</p>
                  <p className="text-white/40 text-xs font-mono tracking-wider mt-0.5">RGB {rgb}</p>
                  <p className="text-white/30 text-xs mt-4 leading-relaxed">{note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center h-20 font-black text-black text-sm tracking-[0.2em] uppercase" style={{ backgroundColor: YELLOW, fontWeight: 900 }}>Gold on White</div>
            <div className="flex items-center justify-center h-20 font-black text-white text-sm tracking-[0.2em] uppercase border border-white/10" style={{ fontWeight: 900 }}>White on Black</div>
            <div className="flex items-center justify-center h-20 font-black text-white text-sm tracking-[0.2em] uppercase" style={{ backgroundColor: YELLOW, fontWeight: 900 }}>White on Gold</div>
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section id="type" className="bg-white px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: YELLOW, fontWeight: 900 }}>
              03 — Typography
            </span>
            <h2 className="text-black leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}>
              One Family.<br />Many Voices.
            </h2>
          </div>

          <div className="border-t border-black/10 pt-10 mb-4 overflow-hidden">
            <p className="text-black/20 text-xs font-black tracking-[0.3em] uppercase mb-4" style={{ fontWeight: 900 }}>Poppins — Primary Typeface</p>
            <div
              className="text-black overflow-hidden whitespace-nowrap select-none"
              style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(5rem, 18vw, 14rem)", lineHeight: 0.88 }}
              aria-hidden
            >
              Aa
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <div className="space-y-10">
              <div className="border-t border-black/10 pt-6">
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontWeight: 900 }}>Display — Black 900</p>
                <p className="text-black leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>Benedict</p>
              </div>
              <div className="border-t border-black/10 pt-6">
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontWeight: 900 }}>Headline — Black 900</p>
                <p className="text-black leading-tight" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>Eggs Benedict Royale</p>
              </div>
              <div className="border-t border-black/10 pt-6">
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontWeight: 900 }}>Subhead — SemiBold Italic 600</p>
                <p className="text-black" style={{ fontFamily: P, fontWeight: 600, fontStyle: "italic", fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}>Transliteration Recipes</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="border-t border-black/10 pt-6">
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontWeight: 900 }}>Body — Regular 400</p>
                <p className="text-black/70 leading-relaxed text-base">
                  A perfectly poached egg balanced on a toasted English muffin, draped in rich hollandaise. This is the recipe that started everything.
                </p>
              </div>
              <div className="border-t border-black/10 pt-6">
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontWeight: 900 }}>Labels — Black 900</p>
                <div className="flex flex-wrap gap-2">
                  {["STEP 01", "PREP", "12 MIN", "FEATURED", "CLASSIC"].map((label, i) => (
                    <span
                      key={label}
                      className="inline-block px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-black"
                      style={{ fontWeight: 900, backgroundColor: i >= 3 ? YELLOW : "#000", color: i >= 3 ? "#000" : "#fff" }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Collection ── */}
      <section id="collection" style={{ backgroundColor: YELLOW }} className="px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3 text-black/40" style={{ fontWeight: 900 }}>
              04 — The Collection
            </span>
            <h2 className="text-white leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}>
              Five Dishes.<br />One Language.
            </h2>
          </div>

          {/* Featured dish */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-1 mb-1">
            <div className="bg-black overflow-hidden" style={{ aspectRatio: "1" }}>
              <img
                src={DISHES[activeDish].img}
                alt={DISHES[activeDish].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-black flex flex-col justify-end p-8 md:p-12">
              <span className="text-white/20 font-black text-xs tracking-[0.3em] uppercase mb-6" style={{ fontWeight: 900 }}>
                0{activeDish + 1} / 05
              </span>
              <p
                className="text-white leading-none mb-3"
                style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.0 }}
              >
                {DISHES[activeDish].name}
              </p>
              <p
                className="text-white/50 font-semibold italic mb-6"
                style={{ fontStyle: "italic", fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}
              >
                {DISHES[activeDish].subtitle}
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {DISHES[activeDish].desc}
              </p>
              <div className="h-px w-full bg-white/10 mb-8" />
              <div className="flex flex-wrap gap-1">
                {DISHES.map((d, i) => (
                  <button
                    key={d.name}
                    onClick={() => setActiveDish(i)}
                    className="px-3 py-1.5 text-xs font-black tracking-[0.15em] uppercase transition-all duration-200"
                    style={{
                      fontWeight: 900,
                      backgroundColor: i === activeDish ? YELLOW : "transparent",
                      color: i === activeDish ? "#000" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-5 gap-1">
            {DISHES.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setActiveDish(i)}
                className="group overflow-hidden bg-black transition-opacity duration-200"
                style={{ aspectRatio: "1", opacity: i === activeDish ? 1 : 0.5, outline: i === activeDish ? `2px solid white` : "none" }}
                aria-label={`Select ${d.name}`}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Voice ── */}
      <section id="voice" className="bg-white px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: YELLOW, fontWeight: 900 }}>
              05 — Brand Voice
            </span>
            <h2 className="text-black leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}>
              Say It Straight.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black/10">
            {[
              { word: "Direct", copy: "No hedging. No softening. Recipes are instructions. State what to do, then stop.", example: "\"Poach for exactly four minutes.\"" },
              { word: "Confident", copy: "We do not say \"you could\" or \"you might\". We say \"do this\". The recipe works.", example: "\"This will change how you eat breakfast.\"" },
              { word: "Warm", copy: "Behind the directness is genuine care. We want you to cook well and eat well.", example: "\"Take your time with the hollandaise.\"" },
              { word: "Curious", copy: "Transliteration means asking \"what if?\". We embrace variation and welcome iteration.", example: "\"What happens if you use duck eggs?\"" },
            ].map(({ word, copy, example }) => (
              <div key={word} className="bg-white p-10 group hover:bg-black transition-colors duration-300 cursor-default">
                <p className="text-black group-hover:text-white font-black leading-none mb-4 transition-colors duration-300" style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {word}
                </p>
                <p className="text-black/50 group-hover:text-white/50 text-sm leading-relaxed mb-4 transition-colors duration-300">{copy}</p>
                <p className="text-black/30 group-hover:text-white/30 text-xs font-semibold italic transition-colors duration-300" style={{ fontStyle: "italic" }}>{example}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-black/10">
            <div className="grid grid-cols-2 border-b border-black/10">
              <p className="py-4 text-xs font-black tracking-[0.2em] uppercase text-black/30 pr-6" style={{ fontWeight: 900 }}>We say</p>
              <p className="py-4 text-xs font-black tracking-[0.2em] uppercase text-black/30 pl-6 border-l border-black/10" style={{ fontWeight: 900 }}>We never say</p>
            </div>
            {[
              ["Season aggressively.", "You may want to add a little salt to taste."],
              ["Serve immediately.", "It's best served fresh, if possible!"],
              ["This recipe works.", "We hope you enjoy trying this dish."],
            ].map(([yes, no]) => (
              <div key={yes} className="grid grid-cols-2 border-b border-black/10">
                <p className="py-5 text-sm font-semibold text-black pr-6">{yes}</p>
                <p className="py-5 text-sm text-black/30 pl-6 border-l border-black/10 line-through decoration-black/20">{no}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage ── */}
      <section id="usage" className="bg-black px-8 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: YELLOW, fontWeight: 900 }}>
              06 — Usage
            </span>
            <h2 className="text-white leading-none" style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0 }}>
              Treat the Brand<br />With Respect.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="inline-flex items-center mb-8 px-3 py-2 text-black font-black text-xs tracking-[0.2em] uppercase" style={{ backgroundColor: YELLOW, fontWeight: 900 }}>
                Do This
              </div>
              <ul className="space-y-5">
                {[
                  "Use Brand Gold on white or black backgrounds only",
                  "Set all display type in Poppins Black (900 weight)",
                  "Allow generous whitespace around the wordmark",
                  "Use illustrations on clean, minimal backgrounds",
                  "Maintain high contrast in all color pairings",
                  "Use Brand Gold sparingly — it is an accent, not a flood fill",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60 text-sm leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center text-black text-xs font-black" style={{ backgroundColor: YELLOW, fontWeight: 900 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="inline-flex items-center mb-8 px-3 py-2 text-white/40 font-black text-xs tracking-[0.2em] uppercase border border-white/10" style={{ fontWeight: 900 }}>
                Never This
              </div>
              <ul className="space-y-5">
                {[
                  "Place Brand Gold on any color besides black or white",
                  "Use Poppins in weights below 600 for headlines",
                  "Crowd the wordmark — it needs room to breathe",
                  "Apply gradients, shadows, or glow effects to brand marks",
                  "Use decorative typefaces alongside Poppins",
                  "Alter proportions or letter-spacing of the logotype",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/30 text-sm leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center text-white/20 text-xs font-black border border-white/10" style={{ fontWeight: 900 }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: YELLOW }} className="px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
            <div>
              <p
                className="text-white leading-none"
                style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.0 }}
              >
                Benedict Eggs
              </p>
              <p
                className="text-black mt-2"
                style={{ fontFamily: P, fontWeight: 600, fontStyle: "italic", fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}
              >
                Transliteration Recipes
              </p>
            </div>
            <div className="text-black/40 text-xs font-black tracking-[0.25em] uppercase" style={{ fontWeight: 900 }}>
              Brand Guidelines — Version 1.0
            </div>
          </div>
          <div className="pt-8 border-t border-black/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-black/40 text-xs">
              This document is the authoritative reference for all Benedict Eggs brand applications.
            </p>
            <div className="flex flex-wrap gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-black/40 hover:text-black text-xs font-black tracking-[0.15em] uppercase transition-colors"
                  style={{ fontWeight: 900 }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
