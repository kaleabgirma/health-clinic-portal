export function EmergencyContactSection() {
  return (
    <section id="emergency" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 dark:text-blue-200 tracking-tight">Emergency Contacts</h2>
      <div className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 shadow-md flex flex-col gap-3">
        <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
          <span className="text-blue-700 dark:text-blue-400 font-extrabold">For urgent medical attention, call:</span>
        </p>
        <ul className="text-lg space-y-2">
          <li><span className="font-bold">Kenya (Ambulance):</span> <a href="tel:999" className="text-blue-700 underline">999</a></li>
          <li><span className="font-bold">South Africa:</span> <a href="tel:112" className="text-blue-700 underline">112</a></li>
          <li><span className="font-bold">Nigeria:</span> <a href="tel:112" className="text-blue-700 underline">112</a></li>
        </ul>
        <p className="text-base mt-2 text-zinc-700 dark:text-zinc-300">
          For other countries, dial your local emergency or visit the nearest hospital.
        </p>
        <p className="mt-2 text-red-700 font-semibold">Virtual emergency consultations are NOT recommended in case of severe or life-threatening conditions.</p>
      </div>
    </section>
  );
}
