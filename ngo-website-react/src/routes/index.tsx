import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, GraduationCap, Droplets, Stethoscope, Sprout, HandHeart,
  ArrowRight, Mail, Phone, MapPin, Quote, Check, Facebook, Instagram, Twitter, Linkedin,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero.jpg";
import eduImg from "@/assets/education.jpg";
import waterImg from "@/assets/water.jpg";
import healthImg from "@/assets/health.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kindred Hands — Compassion in Action" },
      { name: "description", content: "We deliver education, clean water and healthcare to underserved communities worldwide. Donate, volunteer or partner with us." },
      { property: "og:title", content: "Kindred Hands — Compassion in Action" },
      { property: "og:description", content: "Education, clean water and healthcare for communities that need it most." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Causes />
      <Impact />
      <Stories />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#causes", label: "Causes" },
    { href: "#impact", label: "Impact" },
    { href: "#stories", label: "Stories" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Heart className="h-4 w-4" fill="currentColor" />
          </span>
          Kindred Hands
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#donate"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110 transition"
        >
          Donate <Heart className="h-4 w-4" fill="currentColor" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sprout className="h-3.5 w-3.5" /> A nonprofit for everyone
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02]">
            Small acts. <span className="text-primary italic">Big change.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Kindred Hands works alongside communities across 24 countries to bring
            education, clean water and healthcare to the people who need it most.
            Every gift, every hour, every voice moves us forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110 transition"
            >
              Donate now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:border-foreground/40 transition"
            >
              Become a volunteer
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["bg-primary","bg-leaf","bg-secondary","bg-primary/70"].map((c,i)=>(
                <span key={i} className={`h-9 w-9 rounded-full border-2 border-background ${c}`} />
              ))}
            </div>
            <p><span className="font-semibold text-foreground">12,400+</span> kind people already on board</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-soft">
            <img src={heroImg} alt="Volunteers planting with children" className="h-full w-full object-cover" width={1600} height={1200} />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-card border border-border">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-primary">
              <HandHeart className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lives impacted</p>
              <p className="font-display text-2xl font-semibold">2.1M+</p>
            </div>
          </div>
          <div className="absolute -top-5 -right-4 hidden sm:flex items-center gap-3 rounded-2xl bg-secondary px-5 py-4 text-secondary-foreground shadow-card">
            <Sprout className="h-5 w-5 text-primary" />
            <div>
              <p className="text-[11px] opacity-70">Active projects</p>
              <p className="font-display text-xl font-semibold">48 in 24 countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { v: "2.1M+", l: "Lives impacted" },
    { v: "24", l: "Countries served" },
    { v: "180+", l: "Local partners" },
    { v: "94¢", l: "Of every $1 to programs" },
  ];
  return (
    <section className="border-y border-border bg-secondary text-secondary-foreground">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-4xl md:text-5xl font-semibold text-primary">{s.v}</p>
            <p className="mt-2 text-sm opacity-80">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const points = [
    "Community-led, not top-down",
    "Transparent reporting on every dollar",
    "Long-term programs, not quick fixes",
    "Independently audited each year",
  ];
  return (
    <section id="about" className="container-x py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-border">
            <img src={eduImg} alt="Teacher with students" className="h-full w-full object-cover" loading="lazy" width={1000} height={1000} />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl bg-primary text-primary-foreground p-6 shadow-soft hidden md:block">
            <Quote className="h-6 w-6 opacity-80" />
            <p className="mt-2 font-display text-lg leading-snug">"Real change happens when we show up — together."</p>
            <p className="mt-3 text-xs opacity-80">— Amara Okafor, Founder</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who we are</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight">
            A nonprofit built on listening first, acting second.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Since 2009, Kindred Hands has partnered with local leaders to design
            programs that communities actually need. We don't parachute in. We
            stay, we learn, and we build alongside the people we serve.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAUSES ---------------- */
function Causes() {
  const causes = [
    { icon: GraduationCap, title: "Education", desc: "Schools, scholarships and teacher training so every child can learn.", img: eduImg, stat: "320 schools supported" },
    { icon: Droplets, title: "Clean Water", desc: "Wells, filters and sanitation to bring safe water to remote villages.", img: waterImg, stat: "1,200+ wells built" },
    { icon: Stethoscope, title: "Healthcare", desc: "Mobile clinics, vaccines and maternal care reaching last-mile communities.", img: healthImg, stat: "640k patients treated" },
  ];
  return (
    <section id="causes" className="bg-muted/60 border-y border-border">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our causes</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight">
              Where your support goes to work.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Three core programs, designed with local partners, measured by real outcomes.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {causes.map((c) => (
            <article key={c.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1000} height={750} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-primary font-semibold">{c.stat}</span>
                  <a href="#contact" className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPACT / DONATE ---------------- */
function Impact() {
  const tiers = [
    { amt: 25, line: "Provides school supplies for one child for a year." },
    { amt: 60, line: "Delivers safe drinking water to a family for 6 months." },
    { amt: 120, line: "Funds a mobile clinic visit for an entire village." },
  ];
  const [active, setActive] = useState(60);
  return (
    <section id="donate" className="container-x py-20 lg:py-28">
      <div className="grid lg:grid-cols-5 gap-10 items-stretch">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your impact</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight">
            Choose how you want to help.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Pick an amount, or write your own. 94¢ of every dollar reaches our programs.
          </p>
          <div className="mt-8 rounded-2xl bg-secondary text-secondary-foreground p-6">
            <p className="text-sm opacity-80">This month's goal</p>
            <p className="mt-1 font-display text-3xl font-semibold">$82,400 / $120,000</p>
            <div className="mt-4 h-2 rounded-full bg-secondary-foreground/15 overflow-hidden">
              <div className="h-full w-[68%] bg-primary rounded-full" />
            </div>
            <p className="mt-3 text-xs opacity-70">Updated daily · 68% funded</p>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card">
          <div className="grid sm:grid-cols-3 gap-3">
            {tiers.map((t) => (
              <button
                key={t.amt}
                onClick={() => setActive(t.amt)}
                className={`text-left rounded-2xl border p-5 transition ${
                  active === t.amt
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <p className="font-display text-3xl font-semibold">${t.amt}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.line}</p>
              </button>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3">
              <span className="text-muted-foreground">$</span>
              <input
                type="number"
                value={active}
                onChange={(e) => setActive(Number(e.target.value) || 0)}
                className="w-full bg-transparent outline-none text-lg font-semibold"
                aria-label="Donation amount"
              />
              <span className="text-sm text-muted-foreground">USD</span>
            </div>
            <button
              onClick={() => toast.success(`Thank you! Redirecting to donate $${active}…`)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110 transition"
            >
              Donate ${active} <Heart className="h-4 w-4" fill="currentColor" />
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Kindred Hands is a registered 501(c)(3). All donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
function Stories() {
  const quotes = [
    { name: "Fatima", role: "Mother, Mali", text: "The new well changed everything. My children no longer walk hours for water — they walk to school instead." },
    { name: "James", role: "Teacher, Kenya", text: "Kindred Hands listened to what our school actually needed. Today my classroom is full and full of hope." },
    { name: "Dr. Priya", role: "Mobile clinic lead, India", text: "We reach villages no one else does. Behind every visit is a team that truly cares." },
  ];
  return (
    <section id="stories" className="bg-secondary text-secondary-foreground">
      <div className="container-x py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Stories from the ground</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight">
            Real voices. Real change.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl bg-secondary-foreground/[0.06] border border-secondary-foreground/10 p-7">
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 font-display text-xl leading-snug">"{q.text}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{q.name}</span>
                <span className="opacity-70"> — {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VOLUNTEER ---------------- */
function Volunteer() {
  const ways = [
    { icon: HandHeart, title: "Volunteer", desc: "Give your time locally or abroad with one of our 180+ partners." },
    { icon: Sprout, title: "Fundraise", desc: "Run a campaign with friends, family or your workplace." },
    { icon: Heart, title: "Partner", desc: "Bring your company or foundation alongside our mission." },
  ];
  return (
    <section id="volunteer" className="container-x py-20 lg:py-28">
      <div className="grid md:grid-cols-3 gap-6">
        {ways.map((w) => (
          <div key={w.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/60 transition">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <w.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{w.title}</h3>
            <p className="mt-2 text-muted-foreground">{w.desc}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Get involved <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Volunteer", message: "" });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll be in touch within 48 hours.");
      setForm({ name: "", email: "", subject: "Volunteer", message: "" });
    }, 700);
  }

  return (
    <section id="contact" className="bg-muted/60 border-t border-border">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get in touch</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight">
              Have a question? <br />We'd love to hear from you.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Whether you want to volunteer, partner with us or simply learn more,
              our team replies to every message personally.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@kindredhands.org" className="font-semibold hover:text-primary">hello@kindredhands.org</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+1 (415) 555-0142</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="font-semibold">240 Mission St, San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-card">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={80}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={120}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>
            </div>
            <Field label="I'm interested in" className="mt-4">
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              >
                <option>Volunteer</option>
                <option>Donating</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" className="mt-4">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                placeholder="Tell us a little about how you'd like to help…"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-110 transition disabled:opacity-70"
            >
              {loading ? "Sending…" : "Send message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4" fill="currentColor" />
            </span>
            Kindred Hands
          </div>
          <p className="mt-4 max-w-sm opacity-80">
            A global nonprofit delivering education, water and healthcare to
            communities that need it most. 501(c)(3) · EIN 84-1234567
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#causes" className="hover:text-primary">Causes</a></li>
            <li><a href="#impact" className="hover:text-primary">Impact</a></li>
            <li><a href="#stories" className="hover:text-primary">Stories</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Support</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><a href="#donate" className="hover:text-primary">Donate</a></li>
            <li><a href="#volunteer" className="hover:text-primary">Volunteer</a></li>
            <li><a href="#contact" className="hover:text-primary">Partner</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Kindred Hands Foundation. All rights reserved.</p>
          <p>Made with care for the communities we serve.</p>
        </div>
      </div>
    </footer>
  );
}
