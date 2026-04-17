/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import SchedulingForm from './components/SchedulingForm';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <About />
        <SchedulingForm />
      </main>
      <Footer />
    </div>
  );
}
