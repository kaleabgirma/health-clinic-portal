import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  // Navigation links for single-page scroll behavior
  const links = [
    { label: `Services`, href: `#services` },
    { label: `Doctors`, href: `#doctors` },
    { label: `Book Appointment`, href: `#book` },
    { label: `Health Tips`, href: `#health-tips` },
    { label: `Testimonials`, href: `#testimonials` },
    { label: `Blog`, href: `#blog` },
    { label: `Insurance`, href: `#insurance` },
    { label: `Emergency`, href: `#emergency` },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/90 border-b border-slate-200 dark:border-zinc-800 backdrop-blur-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-4 gap-2">
        <span className="font-black text-xl md:text-2xl tracking-tight text-blue-700 dark:text-blue-400">
          AfyaCare
        </span>
        <ul className="hidden md:flex gap-4 items-center">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} className="font-medium px-3 py-2 transition-colors text-zinc-700 dark:text-slate-100 hover:text-blue-700 hover:underline underline-offset-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button className="md:hidden" variant="outline" size="icon" aria-label="Open menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
}
