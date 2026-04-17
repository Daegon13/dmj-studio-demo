import { HeroSection } from "@/src/components/landing/HeroSection";
import { BookingStepsSection } from "@/src/components/landing/BookingStepsSection";
import { ServicesGrid } from "@/src/components/landing/ServicesGrid";
import { LocationAvailabilitySection } from "@/src/components/landing/LocationAvailabilitySection";
import { TestimonialsSection } from "@/src/components/landing/TestimonialsSection";
import { FinalCtaSection } from "@/src/components/landing/FinalCtaSection";
import { MobileStickyCta } from "@/src/components/landing/MobileStickyCta";
import { VisualFooter } from "@/src/components/landing/VisualFooter";

export default function Home() {
  return (
    <main className="shell space-y-7 py-6 pb-32 sm:space-y-10 sm:py-10 sm:pb-10 lg:space-y-12 lg:py-14">
      <HeroSection />
      <BookingStepsSection />
      <ServicesGrid />
      <LocationAvailabilitySection />
      <TestimonialsSection />
      <FinalCtaSection />
      <VisualFooter />
      <MobileStickyCta />
    </main>
  );
}
