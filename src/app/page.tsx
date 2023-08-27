import BenefitSection from '@/components/home/Benefit/BenefitSection';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import TestimonialSection from '@/components/home/Testimonial/TestimonialSection';
import UpskillSection from '@/components/home/UpskillSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <UpskillSection />
      <JourneySection />
      <BenefitSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
