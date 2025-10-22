import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactFormUniversal } from "@/components/ContactFormUniversal";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <About />
        <Benefits />
        <HowItWorks />
        <CTABanner />
        <Testimonials />
        <FAQ />
        <ContactFormUniversal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
