"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function FloatingAudioButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  }
};

    useEffect(() => {
    const handleUserInteraction = async () => {
        if (!audioRef.current) return;

        try {
        await audioRef.current.play();
        setIsPlaying(true);
        } catch (err) {
        console.error("Audio play failed:", err);
        }

        document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
           <audio
        ref={audioRef}
        src="/audio/krishna_bansuri.mp3"
        loop
        style={{ display: "none" }}
      />
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 max-md:bottom-4 max-md:right-4 
        z-20
        w-14 h-14 max-md:w-11 max-md:h-11 
        flex items-center justify-center
        rounded-full 
        shadow-lg 
        hover:scale-105 active:scale-95
        transition-all duration-200"
      >
        <img
          src="/images/logo_without_text.webp"
          alt=""
          className="absolute inset-0 w-full h-full opacity-90"
        />

       <div className="relative pl-0.5 pt-0.5 z-0 flex items-center justify-center w-full h-full">
  {isPlaying ? (
    <Pause className="text-white w-5 h-5 max-md:w-5 max-md:h-5 fill-current" />
  ) : (
    <Play className="text-white w-5 h-5 max-md:w-5 max-md:h-5 rotate-0 fill-current" />
  )}
</div>

      </button>
    </>
  );
}
