import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  "Wedding Cars",
  "Airport Transfer",
  "Self Drive Rental",
  "Corporate Travel",
  "Outstation Trip",
  "Events & Parties",
  "City Tours",
  "Tempo Traveller",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-brand rounded-3xl blur opacity-40" />
      <div className="relative rounded-3xl bg-card text-card-foreground p-6 md:p-8 shadow-card border border-border">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
            <Sparkles className="h-4 w-4 text-accent" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Free Consultation</span>
        </div>
        <h3 className="text-2xl font-bold">Get a custom quote in minutes</h3>
        <p className="text-sm text-muted-foreground mt-1">Tell us what you need — we'll match the perfect ride.</p>

        {submitted ? (
          <div className="mt-8 text-center py-8">
            <CheckCircle2 className="h-14 w-14 text-accent mx-auto" />
            <h4 className="mt-3 font-bold text-lg">Thanks! We'll be in touch.</h4>
            <p className="text-sm text-muted-foreground mt-1">Our team will call you within 15 minutes.</p>
          </div>
        ) : (
          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" required type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label>Service</Label>
              <Select defaultValue={services[0]}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="msg">Trip Details</Label>
              <Textarea id="msg" rows={3} placeholder="Date, pickup location, number of passengers..." />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-brand-accent-dark shadow-accent h-11 text-base">
              Request Free Quote
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              By submitting you agree to our terms. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
