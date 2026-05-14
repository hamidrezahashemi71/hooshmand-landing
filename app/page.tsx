"use client"
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex flex-col gap-15 bg-gray-50"
    >
      <HeroSection />
      <ServicesSection />
      <ContactFormSection />
      <FAQSection />
    </motion.div>
  );
}
