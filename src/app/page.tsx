import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      
      <div className="p-8 sm:p-20">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}
