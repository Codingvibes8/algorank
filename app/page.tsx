import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Comparison from "./components/Comparison";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import AuditForm from "./components/AuditForm";
import BookCall from "./components/BookCall";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import CheckoutStatus from "./components/CheckoutStatus";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-paper text-ink-950 dark:bg-ink-950 dark:text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={null}>
          <CheckoutStatus />
        </Suspense>
        <Hero />
        <Stats />
        <HowItWorks />
        <Comparison />
        <Services />
        <Pricing />
        <AuditForm />
        <BookCall />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
