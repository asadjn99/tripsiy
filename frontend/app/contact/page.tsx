import type { Metadata } from "next";
import ContactForm from "@/../components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Tripsiy",
  description: "Get in touch with Tripsiy for your next adventure.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      <ContactForm />
      
    </main>
  );
}