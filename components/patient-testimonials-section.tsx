export function PatientTestimonialsSection() {
  // Testimonials (can pull from localStorage or CMS in production)
  const testimonials = [
    {
      name: "A.S.",
      feedback:
        "Booking my son's appointment was so easy, and Dr. Kwame was amazing! I appreciate how attentive the staff were, and we left feeling truly cared for.",
    },
    {
      name: "Lebo M.",
      feedback:
        "The virtual consultation saved me a long trip to town. The doctor listened patiently and resolved my concern with expertise. Highly recommended!",
    },
    {
      name: "John O.",
      feedback:
        "Clean, friendly, and very professional team. The health tips and educational articles have become my go-to source!",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">Patient Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className="p-8 bg-white dark:bg-blue-950 rounded-2xl border border-blue-100 dark:border-blue-800 shadow flex flex-col items-center hover:scale-[1.02] transition-transform">
            <span className="text-4xl mb-3" aria-hidden>“</span>
            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200 text-center mb-4">{t.feedback}</p>
            <footer className="mt-2 self-end text-blue-800 dark:text-blue-200 font-bold">{t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
