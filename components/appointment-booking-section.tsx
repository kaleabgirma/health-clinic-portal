import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// For demonstration storage, we'll use localStorage (browser only)
const demoDoctors = [
  {
    id: 1,
    name: `Dr. Miriam Chikere`,
  },
  {
    id: 2,
    name: `Dr. Kwame Mensah`,
  },
  {
    id: 3,
    name: `Dr. Zanele Nkosi`,
  },
];

function saveAppointment(appt: any) {
  const old = JSON.parse(localStorage.getItem("afya_appts") || "[]");
  localStorage.setItem("afya_appts", JSON.stringify([...old, appt]));
}

export function AppointmentBookingSection() {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [errors, setErrors] = useState<any>({});

  // Basic available slots for demonstration
  const slots = ["08:00", "09:30", "11:00", "13:00", "15:00"];

  function validate() {
    const errs: any = {};
    if (!doctorId) errs.doctor = "Please select a doctor.";
    if (!date) errs.date = "Please select a date.";
    if (!slot) errs.slot = "Please choose a time slot.";
    if (!name.trim()) errs.name = "Name is required.";
    if (!contact.trim()) errs.contact = "Contact is required.";
    if (!reason.trim()) errs.reason = "Reason for visit is required.";
    return errs;
  }

  function handleBook(e: any) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Save to localStorage
      saveAppointment({
        doctorName: demoDoctors.find((d) => String(d.id) === doctorId)?.name,
        doctorId,
        date,
        slot,
        name,
        contact,
        reason,
        virtual: false,
        ts: new Date().toISOString(),
      });
      setConfirmation(
        `Thank you ${name}, your appointment with ${demoDoctors.find((d) => String(d.id) === doctorId)?.name} on ${date} at ${slot} has been booked! We’ll be in touch.`
      );
      setDoctorId("");
      setDate("");
      setSlot("");
      setName("");
      setContact("");
      setReason("");
      setTimeout(() => setConfirmation(""), 10000);
    }
  }

  return (
    <section id="book" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 dark:text-blue-200 tracking-tight">
        Book an Appointment
      </h2>
      <Card className="max-w-2xl mx-auto p-8 rounded-2xl border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-950 shadow-lg">
        <form onSubmit={handleBook} className="flex flex-col gap-6" aria-label="Appointment booking form">
          <div>
            <label htmlFor="doctor" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Select Doctor</label>
            <Select value={doctorId} onValueChange={setDoctorId} name="doctor" required>
              <SelectTrigger id="doctor" aria-label="Select Doctor" className={errors.doctor ? "border-red-500" : ""}>
                <SelectValue placeholder="Choose a doctor" />
              </SelectTrigger>
              <SelectContent>
                {demoDoctors.map((doc) => (
                  <SelectItem key={doc.id} value={String(doc.id)}>{doc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.doctor && <p className="text-red-600 mt-1 text-sm">{errors.doctor}</p>}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="date" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Date</label>
              <Input
                type="date"
                id="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                min={new Date().toISOString().slice(0,10)}
                className={errors.date ? "border-red-500" : ""}
                required
              />
              {errors.date && <p className="text-red-600 mt-1 text-sm">{errors.date}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="slot" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Time Slot</label>
              <Select value={slot} onValueChange={setSlot} name="slot" required>
                <SelectTrigger id="slot" aria-label="Time Slot" className={errors.slot ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {slots.map((time, idx) => (
                    <SelectItem value={time} key={idx}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.slot && <p className="text-red-600 mt-1 text-sm">{errors.slot}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Your Name</label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className={errors.name ? "border-red-500" : ""}
                autoComplete="name"
                required
                placeholder="Enter full name"
              />
              {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="contact" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Contact Info</label>
              <Input
                id="contact"
                value={contact}
                onChange={e => setContact(e.target.value)}
                className={errors.contact ? "border-red-500" : ""}
                autoComplete="tel"
                required
                placeholder="Phone or Email"
              />
              {errors.contact && <p className="text-red-600 mt-1 text-sm">{errors.contact}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="reason" className="font-semibold text-blue-700 dark:text-blue-300 mb-1 block">Reason for Visit</label>
            <Textarea
              id="reason"
              value={reason}
              onChange={e => setReason(e.target.value)}
              className={errors.reason ? "border-red-500" : ""}
              required
              placeholder="e.g. Routine checkup, fever, headache, consultation"
            />
            {errors.reason && <p className="text-red-600 mt-1 text-sm">{errors.reason}</p>}
          </div>
          <Button type="submit" size="lg" className="text-base font-bold px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-xl mt-2">
            Confirm Appointment
          </Button>
          {confirmation && (
            <div className="text-green-700 dark:text-green-400 mt-5 bg-green-50 dark:bg-green-900/60 rounded-xl p-4 shadow">
              {confirmation}
            </div>
          )}
        </form>
      </Card>
    </section>
  );
}
