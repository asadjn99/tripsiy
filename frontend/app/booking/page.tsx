import type { Metadata } from "next";
import BookingForm from "@/../components/sections/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Trip | Tripsiy",
  description: "Start your journey today with Tripsiy.",
};

export default function BookingPage() {
  return (
    <main>
      <BookingForm />
    </main>
  );
}