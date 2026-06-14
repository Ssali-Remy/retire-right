import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Quiz from "@/components/Quiz";
import Community from "@/components/Community";
import Wellness from "@/components/Wellness";
import Impact from "@/components/Impact";
import LifeAfter from "@/components/LifeAfter";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Retire Right Advisory",
  description:
    "Retirement planning, investment advisory, lifestyle assessment, and corporate retirement programs.",
  url: "https://retirerightadvisory.com",
  telephone: "+1-800-555-0142",
  email: "hello@retirerightadvisory.com",
  slogan: "Plan Today. Thrive Tomorrow.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "120 Meridian Avenue, Suite 800",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: "US",
  knowsAbout: [
    "Retirement Planning",
    "Investment Advisory",
    "Financial Wellness",
    "Corporate Retirement Programs",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Quiz />
        <Community />
        <Wellness />
        <Impact />
        <LifeAfter />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
