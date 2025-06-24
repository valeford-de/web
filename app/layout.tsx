"use client";

import React, { useState, createContext, useContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface VideoContextType {
  videoEnabled: boolean;
  toggleVideo: () => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

function VideoProvider({ children }: { children: React.ReactNode }) {
  const [videoEnabled, setVideoEnabled] = useState(true);

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  return (
    <VideoContext.Provider value={{ videoEnabled, toggleVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Valeford | Venture Studio</title>
        <meta
          name="description"
          content="Valeford is a venture studio that builds, validates, and scales digital products with a focus on mobile applications."
        />
        <meta
          name="keywords"
          content="venture studio, mobile applications, digital products, startup incubator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <VideoProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </VideoProvider>
      </body>
    </html>
  );
}
