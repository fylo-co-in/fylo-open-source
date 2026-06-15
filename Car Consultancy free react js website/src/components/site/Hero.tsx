import { Heart, Plane, Briefcase, KeyRound, Building2, GraduationCap, PartyPopper, Truck, ShieldCheck, Star } from "lucide-react";
import { ContactForm } from "./ContactForm";

const useCases = [
  { icon: Heart, label: "Wedding Cars" },
  { icon: Plane, label: "Airport Transfer" },
  { icon: KeyRound, label: "Self Drive" },
  { icon: Briefcase, label: "Corporate" },
  { icon: PartyPopper, label: "Events & Parties" },
  { icon: GraduationCap, label: "Outstation Trips" },
  { icon: Building2, label: "City Tours" },
  { icon: Truck, label: "Tempo Travellers" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-start relative">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium border border-white/20">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Trusted Car Consultancy · 10,000+ Happy Rides
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Your Journey,<br />
            <span className="text-accent">Our Expertise.</span>
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">
            From weddings to weekend getaways — we connect you with the perfect vehicle, driver, and package. Premium fleet, transparent pricing, round-the-clock support.
          </p>

          {/* Use cases grid */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-3">We cover every occasion</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {useCases.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/15 px-3 py-4 hover:bg-white/20 hover:border-accent transition-all cursor-pointer"
                >
                  <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              <span className="ml-1 font-semibold">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <span className="text-white/80">500+ verified drivers</span>
            <div className="h-4 w-px bg-white/30 hidden sm:block" />
            <span className="text-white/80 hidden sm:inline">24/7 Support</span>
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="lg:pl-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
