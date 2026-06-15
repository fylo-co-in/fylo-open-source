import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white px-8 py-14 md:py-20 md:px-16 shadow-brand">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to book your <span className="text-accent">perfect ride?</span></h2>
            <p className="mt-4 text-white/85 text-lg">Talk to our consultants today. Free quote in under 15 minutes — no obligations.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:demo@drivemate.com">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-brand-accent-dark shadow-accent h-12 px-6">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 px-6">
                  <Phone className="mr-1 h-4 w-4" /> +91 98765 43210
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
