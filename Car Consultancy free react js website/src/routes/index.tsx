import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DriveMate — Car Consultancy for Every Journey" },
      { name: "description", content: "Wedding cars, airport transfers, self-drive rentals, corporate travel and more. Verified drivers, transparent pricing, 24/7 support across 40+ cities." },
      { property: "og:title", content: "DriveMate — Car Consultancy for Every Journey" },
      { property: "og:description", content: "Your trusted partner for weddings, travel, self-drive and corporate car bookings." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
