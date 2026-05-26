import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Packages from "@/components/landing/Packages";
import Promotions from "@/components/landing/Promotions";
import ContractForm from "@/components/landing/ContractForm";
import SupportForms from "@/components/landing/SupportForms";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Promotions />
        <ContractForm />
        <SupportForms />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
