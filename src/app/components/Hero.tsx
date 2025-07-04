'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-[#f7f5ef] py-12 sm:py-20 px-4">
      <div className="relative max-w-5xl mx-auto overflow-hidden aspect-[3/1] flex items-center justify-center">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Text Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-lg mb-3 sm:mb-4 tracking-tight max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>
          <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-normal drop-shadow mb-4 sm:mb-6 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
            Compassionate therapy for anxiety, relationships, and trauma—serving Los Angeles in-person & via Zoom
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#b7cfc9] hover:bg-[#a0bdb3] text-white font-semibold rounded-full px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm tracking-wider uppercase shadow transition-colors duration-200"
            style={{ letterSpacing: '0.05em' }}
          >
            Book a Free Consult
          </a>
        </div>
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 z-0" />
      </div>
    </section>
  );
}
