"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorProfilesSection } from "@/components/doctor-profiles-section";
import { AppointmentBookingSection } from "@/components/appointment-booking-section";
import { PatientTestimonialsSection } from "@/components/patient-testimonials-section";
import { BlogSection } from "@/components/blog-section";
import { HealthTipsSection } from "@/components/health-tips-section";
import { InsuranceInfoSection } from "@/components/insurance-info-section";
import { EmergencyContactSection } from "@/components/emergency-contact-section";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 dark:from-zinc-950 dark:to-blue-950">
      <Navigation />
      <HeroSection />
      <section className="container mx-auto pb-24">
        <ServicesSection />
        <DoctorProfilesSection />
        <AppointmentBookingSection />
        <HealthTipsSection />
        <PatientTestimonialsSection />
        <BlogSection />
        <InsuranceInfoSection />
        <EmergencyContactSection />
      </section>
    </main>
  );
}
