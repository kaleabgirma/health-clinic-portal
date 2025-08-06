export function InsuranceInfoSection() {
  const insuranceCompanies = [
    { name: "NHIF Kenya", details: "Covers inpatient and outpatient services. Please bring your NHIF card and ID." },
    { name: "Discovery Health South Africa", details: "Accepted for specialist consultations and hospital bills." },
    { name: "AXA Assurance Maroc", details: "We facilitate claim processing - ask our reception for help." },
    { name: "Private Insurance", details: "Many private African and international plans accepted. Kindly confirm with our desk." },
  ];

  return (
    <section id="insurance" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">Insurance Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insuranceCompanies.map((ins, idx) => (
          <div key={ins.name} className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 shadow-md hover:scale-[1.02] transition-transform">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 text-xl mb-2">{ins.name}</h3>
            <p className="text-zinc-800 dark:text-zinc-100">{ins.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
