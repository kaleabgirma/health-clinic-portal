import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-16 md:py-32 px-4 lg:px-8 bg-gradient-to-tr from-sky-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-zinc-950 rounded-b-3xl md:rounded-b-[4.5rem] shadow-md mb-10">
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-blue-700 dark:text-blue-200 leading-tight drop-shadow-xl">
          Expert Healthcare<br />
          for a Healthier Africa
        </h1>
        <p className="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-200 mb-6 leading-relaxed">
          Book appointments with top specialists, access reliable health information,
          and manage your wellbeing—all in one trusted platform dedicated to service and care on the continent.
        </p>
        <div className="flex gap-4">
          <a href="#book">
            <Button size="lg" className="text-base font-bold shadow-lg px-8 py-5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl transition-all">
              Book Appointment
            </Button>
          </a>
          <a href="#doctors" className="">
            <Button variant="outline" size="lg" className="text-base font-bold bg-white dark:bg-blue-950 border-blue-300 dark:border-blue-700 px-8 py-5 rounded-xl text-blue-800 dark:text-blue-100 shadow-lg">
              Meet Our Doctors
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute md:static right-0 md:w-1/2 flex justify-end md:justify-center w-full pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&h=540&fit=crop&auto=format"
          alt="Friendly African doctor standing, inspiring trust"
          className="md:max-w-md rounded-3xl shadow-xl object-cover border-4 border-blue-200 dark:border-blue-900"
          loading="lazy"
        />
        <div className="hidden md:block absolute top-0 right-14 -z-10 rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-teal-300 w-48 h-48 blur-3xl opacity-40 animate-pulse" />
      </div>
    </section>
  );
}
