import { Car, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
              <Car className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-display font-bold">Drive<span className="text-accent">Mate</span></span>
          </div>
          <p className="mt-4 text-sm text-background/60 leading-relaxed">
            India's trusted car consultancy — making every journey effortless and memorable.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>Wedding Cars</li>
            <li>Airport Transfer</li>
            <li>Self Drive</li>
            <li>Corporate Travel</li>
            <li>Outstation Trips</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#about" className="hover:text-accent">About Us</a></li>
            <li><a href="#why" className="hover:text-accent">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> demo@drivemate.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 98765 43210</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Bangalore · Mumbai · Delhi · Pan India</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 mt-12 pt-6 border-t border-background/10 flex flex-wrap justify-between gap-4 text-xs text-background/50">
        <p>© {new Date().getFullYear()} DriveMate. All rights reserved.</p>
        <p>Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}
