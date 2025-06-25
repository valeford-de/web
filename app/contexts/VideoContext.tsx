"use client";

import React, { useState, createContext, useContext } from "react";

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

export function VideoProvider({ children }: { children: React.ReactNode }) {
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
