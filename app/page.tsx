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
  telephone: "+256-312-200-145",
  email: "hello@retireright.co.ug",
  slogan: "Plan Today. Thrive Tomorrow.",
  currenciesAccepted: "UGX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rwenzori Towers, Nakasero",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  areaServed: "UG",
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
