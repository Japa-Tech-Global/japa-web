import BillerSection from '@/components/home/BillerSection/BillerSection';
import HeroSection from '@/components/home/HeroSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import AppLayout from '@/components/layout/AppLayout';
// import { useAppSelector } from '@/store/hooks';
// import { useGetUsersQuery } from '@/store/services/userApi';

export default function Home() {
  // const { value } = useAppSelector((state) => state.counter);

  // const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  // console.log(data);
  return (
    <AppLayout>
      <HeroSection />
      <BillerSection />
      <TestimonialSection />
    </AppLayout>
  );
}
