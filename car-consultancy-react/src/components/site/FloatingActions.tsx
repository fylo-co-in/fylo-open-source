import { MessageCircle, Mail } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210?text=Hi%20DriveMate%2C%20I%20want%20to%20book%20a%20car"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand animate-pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-16 whitespace-nowrap rounded-md bg-foreground text-background text-xs font-medium px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href="mailto:demo@drivemate.com?subject=Booking%20Enquiry"
        aria-label="Email us"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-accent hover:scale-110 transition-transform"
      >
        <Mail className="h-6 w-6" />
        <span className="absolute right-16 whitespace-nowrap rounded-md bg-foreground text-background text-xs font-medium px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Email Demo
        </span>
      </a>
    </div>
  );
}
