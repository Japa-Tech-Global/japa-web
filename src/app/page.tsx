import BenefitSection from '@/components/home/Benefit/BenefitSection';
import FeaturedVideoSection from '@/components/home/FeaturedVideoSection';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import TestimonialSection from '@/components/home/Testimonial/TestimonialSection';
import UpskillSection from '@/components/home/UpskillSection';
import AppLayout from '@/components/layout/AppLayout';

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <FeaturedVideoSection />
      <UpskillSection />
      <JourneySection />
      <BenefitSection />
      <TestimonialSection />
    </AppLayout>
  );
}
