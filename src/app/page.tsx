import Hero from "./components/Hero";
import styles from "./styles/navigation.module.css";

export default function Home() {
  return (
    <div className={`min-h-screen font-[family-name:var(--font-geist-sans)] ${styles.contentPadding}`}>
      <Hero />
      
      <div className="p-8 sm:p-20">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}
