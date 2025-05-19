import Hero from "./components/Hero";
import OurApproach from "./components/OurApproach";
import OurProducts from "./components/OurProducts";
import TechStack from "./components/TechStack";
import FinalCTA from "./components/FinalCTA";
import styles from "./styles/navigation.module.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div
      className={`min-h-screen font-[family-name:var(--font-geist-sans)] ${styles.contentPadding}`}
    >
      <Hero />
      <OurApproach />
      <OurProducts />
      <TechStack />
      <FinalCTA />
      <Footer />
      
      <div className="p-8 sm:p-20">{/* Additional content can go here */}</div>
    </div>
  );
}
