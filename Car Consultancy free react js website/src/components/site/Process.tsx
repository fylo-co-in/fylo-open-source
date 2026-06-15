import { MessageSquare, ClipboardCheck, Car, Smile } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Tell us your need", desc: "Share your trip details via form, call, or WhatsApp." },
  { icon: ClipboardCheck, title: "Get a custom plan", desc: "We curate vehicle + driver + route with transparent pricing." },
  { icon: Car, title: "Enjoy your ride", desc: "Verified driver arrives on time. Sit back and relax." },
  { icon: Smile, title: "Rate & repeat", desc: "Share feedback. Loyalty discounts on every next booking." },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">How It Works</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Booking made <span className="text-gradient-brand">effortless</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-bold text-brand-light">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
