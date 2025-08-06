export function HealthTipsSection() {
  // Can pull from blog or have dedicated tips
  const tips = [
    {
      title: `Stay Hydrated` ,
      tip: `Drink clean water throughout the day, especially if you live in hot climates or during physical activity.`
    },
    {
      title: `Regular Checkups`,
      tip: `Routine medical visits help catch and treat issues early. Never skip immunizations and wellness checks!`
    },
    {
      title: `Protect Against Mosquitoes`,
      tip: `Use insecticide-treated nets, close windows at night, and clear stagnant water to lower malaria risk.`
    },
    {
      title: `Eat Balanced Meals`,
      tip: `Local produce and whole foods keep your family healthier. Avoid excess sugar and processed snacks.`
    },
    {
      title: `Exercise Often`,
      tip: `Even daily walks or stretching routines can improve your health and energy.`
    },
  ];
  return (
    <section id="health-tips" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">Health Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((t, idx) => (
          <div key={idx} className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-800 rounded-2xl px-7 py-6 shadow-md flex flex-col gap-3 hover:scale-[1.02] transition-transform">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 text-lg tracking-tight mb-1">{t.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-200">{t.tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
