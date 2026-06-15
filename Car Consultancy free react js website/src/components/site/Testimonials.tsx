import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya & Arjun", role: "Wedding Booking", text: "Absolutely magical! The vintage Rolls Royce and decoration were flawless. Driver was professional and punctual to the minute." },
  { name: "Rahul Mehta", role: "Corporate Client", text: "We use DriveMate for all executive travel. Reliable, premium fleet, and the dedicated account manager makes it effortless." },
  { name: "Sneha Kapoor", role: "Self Drive", text: "Cleanest rental I've ever had. Booking took 2 minutes and the SUV was delivered to my door. 10/10." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Loved by <span className="text-gradient-brand">thousands</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-brand transition-shadow">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-brand-light" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
