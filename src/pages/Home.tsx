import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import SchedulingForm from '../components/SchedulingForm';
import About from '../components/About';
import BeforeAfter from '../components/BeforeAfter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <About />
      <SchedulingForm />
    </>
  );
}
