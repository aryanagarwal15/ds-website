import React from "react";
import "./AnimatedSun.css"; // We'll create this CSS file

export default function AnimatedSun({ isSpeaking }: { isSpeaking: boolean }) {
  return (
    <div className={`sun-container ${isSpeaking ? "speaking" : ""}`}>
      <div className="sun" />
    </div>
  );
}
