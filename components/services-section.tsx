export function ServicesSection() {
  // African-context services examples - customize as needed
  const services = [
    {
      title: `General Outpatient Care`,
      desc:
        `Comprehensive primary health consultations for all ages and backgrounds, offering prompt care for everyday health matters.`,
    },
    {
      title: `Maternal & Child Health`,
      desc:
        `Specialized maternal, prenatal, and pediatric care promoting family wellbeing across Africa's unique communities.`,
    },
    {
      title: `Malaria & Infectious Diseases`,
      desc:
        `Screening, prevention, and treatment of endemic conditions with a focus on malaria, typhoid, and tuberculosis.`,
    },
    {
      title: `Vaccination & Immunization`,
      desc:
        `Up-to-date immunizations for children and adults to safeguard against preventable diseases.`,
    },
    {
      title: `Telemedicine & Virtual Consultation`,
      desc:
        `Secure online appointments so quality care reaches you wherever you are.`,
    },
    {
      title: `Health Education & Counseling`,
      desc:
        `Workshops, talks, and personal sessions on health, nutrition, and chronic illness management.`,
    },
    {
      title: `Laboratory & Diagnostics`,
      desc:
        `On-site and partner laboratory tests for accurate, timely diagnosis of health issues.`,
    },
  ];
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white dark:bg-blue-950 rounded-2xl p-8 shadow-md border border-blue-100 dark:border-blue-800 hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
              {service.title}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-200">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
