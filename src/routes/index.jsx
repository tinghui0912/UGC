import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import BrandTrustBar from "@/components/portfolio/BrandTrustBar";
import About from "@/components/portfolio/About";
import SelectedWork from "@/components/portfolio/SelectedWork";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Services from "@/components/portfolio/Services";
import Testimonials from "@/components/portfolio/Testimonials";
import ContactCTA from "@/components/portfolio/ContactCTA";
import Footer from "@/components/portfolio/Footer";
import { portfolio } from "@/portfolio.config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: portfolio.seo.title },
      { name: "description", content: portfolio.seo.description },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandTrustBar />
        <SelectedWork />
        <CaseStudies />
        <About />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}