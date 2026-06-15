import { ShieldCheck, Clock, Tag, Users, MapPin, Wrench } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Verified Drivers", desc: "Background-checked, trained, and rated by thousands of customers." },
  { icon: Tag, title: "Transparent Pricing", desc: "No hidden charges. Get the final price upfront." },
  { icon: Clock, title: "24/7 Support", desc: "Real humans, real-time. Reach us any hour, any day." },
  { icon: Users, title: "10,000+ Customers", desc: "From weddings to weekday commutes — we've delivered." },
  { icon: MapPin, title: "Pan-India Coverage", desc: "Operations in 40+ cities and growing every month." },
  { icon: Wrench, title: "Premium Fleet", desc: "Sanitized, insured, and regularly serviced vehicles." },
];

const stats = [
  { v: "10K+", l: "Happy Rides" },
  { v: "500+", l: "Verified Drivers" },
  { v: "40+", l: "Cities Covered" },
  { v: "4.9★", l: "Average Rating" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              The smarter way to <span className="text-gradient-brand">book any ride.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              We're not just another car service — we're your personal travel consultant. We listen, we curate, we deliver.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-2xl bg-gradient-soft border border-border p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-5 hover:border-accent transition-colors shadow-card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
