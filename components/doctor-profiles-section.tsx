import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Example doctor data for demonstration (could use localStorage or context for real persistence)
const doctors = [
  {
    id: 1,
    name: `Dr. Miriam Chikere`,
    specialization: `Family Medicine` ,
    image: `https://images.unsplash.com/photo-1511174511562-5f97f4f2b7b2?w=400&h=400&fit=crop&auto=format`,
    bio: `Committed to delivering patient-centered care with a passion for preventative health and community wellness. Over 17 years serving families across Kenya and East Africa.`,
    availability: ["Monday 10:00-14:00", "Wednesday 09:00-13:00", "Friday 11:00-15:00"],
  },
  {
    id: 2,
    name: `Dr. Kwame Mensah`,
    specialization: `Pediatrics`,
    image: `https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&auto=format`,
    bio: `Pediatrician dedicated to improving child health outcomes across West Africa. Known for his empathetic approach and innovative solutions for local health challenges.`,
    availability: ["Tuesday 08:00-12:00", "Thursday 14:00-18:00"],
  },
  {
    id: 3,
    name: `Dr. Zanele Nkosi`,
    specialization: `Obstetrics & Gynecology`,
    image: `https://images.unsplash.com/photo-1612349317150-c8a1c07aa9c9?w=400&h=400&fit=crop&auto=format`,
    bio: `Specialist in women's health, helping hundreds of South African women through family planning, safe delivery, and reproductive health challenges.`,
    availability: ["Monday 14:00-17:00", "Friday 09:00-13:00"],
  },
];

export function DoctorProfilesSection() {
  const [selectedId, setSelectedId] = useState<number|null>(null);
  const selected = doctors.find((d) => d.id === selectedId);

  return (
    <section id="doctors" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">
        Meet Our Doctors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {doctors.map((doc) => (
          <Card key={doc.id} className="flex flex-col items-center p-6 shadow-md border border-blue-100 dark:border-blue-800 rounded-2xl bg-white dark:bg-blue-950 hover:scale-[1.025] transition-transform">
            <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 dark:border-blue-800 mb-4" loading="lazy"/>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">{doc.name}</h3>
            <span className="inline-block bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs px-3 py-1 mb-2">{doc.specialization}</span>
            <p className="text-zinc-800 dark:text-zinc-100 leading-snug text-center mb-2">{doc.bio}</p>
            <div className="text-blue-700 dark:text-blue-300 mb-2">
              <strong>Available:</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                {doc.availability.map((slot,i) => (
                  <li key={i}>{slot}</li>
                ))}
              </ul>
            </div>
            <Button onClick={() => setSelectedId(doc.id)} className="mt-2 w-full" variant="outline" size="sm">Book with {doc.name.split(' ')[1]}</Button>
          </Card>
        ))}
      </div>
      {selected && (
        <div className="p-8 my-8 rounded-3xl bg-blue-50 dark:bg-zinc-900 border border-blue-200 dark:border-blue-800 shadow-xl transition-all">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img src={selected.image} alt={selected.name} className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 dark:border-blue-900 mb-3" loading="lazy"/>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-1">{selected.name}</h4>
              <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-xs px-3 py-1 mb-2">{selected.specialization}</span>
              <p className="text-zinc-700 dark:text-zinc-200 mb-1">{selected.bio}</p>
              <strong className="block text-blue-800 dark:text-blue-100 mt-4 mb-2">Availability:</strong>
              <ul className="list-disc list-inside text-sm">
                {selected.availability.map((slot,i) => (<li key={i}>{slot}</li>))}
              </ul>
              <a href="#book">
                <Button className="mt-6 px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white shadow-md" size="lg">Book an Appointment</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
