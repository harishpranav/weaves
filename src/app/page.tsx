import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyWeaves from "@/components/WhyWeaves";
import ClientLogos from "@/components/ClientLogos";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navigation />
      <Hero />
      <WhyWeaves />
      <ClientLogos />
      <HomeCTA />
      <Footer />
    </main>
  );
}