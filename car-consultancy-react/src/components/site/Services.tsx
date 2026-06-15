import { Heart, Plane, KeyRound, Briefcase, PartyPopper, GraduationCap, Building2, Truck } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Cars", desc: "Decorated luxury vehicles, vintage classics & convoy packages for your big day.", tag: "Most Loved" },
  { icon: Plane, title: "Airport Transfers", desc: "On-time pickup & drop with flight tracking and meet-and-greet service." },
  { icon: KeyRound, title: "Self-Drive Rentals", desc: "Hatchbacks to SUVs — drive your way with insured, sanitized vehicles." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Monthly contracts, executive sedans, and dedicated chauffeurs for teams." },
  { icon: GraduationCap, title: "Outstation Trips", desc: "Multi-day journeys across India with experienced highway drivers." },
  { icon: PartyPopper, title: "Events & Parties", desc: "Birthdays, anniversaries, prom nights — limos and party buses on demand." },
  { icon: Building2, title: "City Tours", desc: "Curated local sightseeing packages with bilingual driver-guides." },
  { icon: Truck, title: "Tempo Travellers", desc: "Group travel up to 26 seats with AC, recliners and entertainment systems." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            One platform. <span className="text-gradient-brand">Every kind of ride.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whatever the occasion, we have a tailored solution backed by verified vehicles and trained drivers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:-translate-y-1 hover:shadow-brand transition-all duration-300"
            >
              {tag && (
                <span className="absolute -top-2 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-accent text-accent-foreground shadow-accent">
                  {tag}
                </span>
              )}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
