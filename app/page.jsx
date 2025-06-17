"use client";
import { useState } from "react";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import ContactSection from "./components/contact-section";
import BookingModal from "./components/booking-modal";
import Navbar from "./components/navbar";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openBookingModal = (serviceName = null) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <Navbar onOpenBooking={openBookingModal} />
      <HeroSection onOpenBooking={openBookingModal} />
      <div id="about" className="scroll-mt-20">
        <AboutSection />
      </div>
      <div id="services" className="scroll-mt-20">
        <ServicesSection onOpenBooking={openBookingModal} />
      </div>
      <div id="contact" className="scroll-mt-20">
        <ContactSection onOpenBooking={openBookingModal} />
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        preSelectedService={selectedService}
      />
    </div>
  );
}
