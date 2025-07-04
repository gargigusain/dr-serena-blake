'use client';
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#f7f5ef] py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center">
        {/* Logo or simple text */}
        <div className="flex items-center">
          {/* You can replace this with an <img> if you have a logo */}
          <span className="font-serif text-xs text-gray-700 tracking-widest leading-tight">
            Serena Blake, Psy.D.<br />
            Clinical Psychologist
          </span>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* (Optional) Add navigation or contact info here */}
      </div>
    </header>
  );
}
