'use client';

import React, { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "24-hour notice required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 px-4 bg-[#f7f5ef]" id="faq">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif text-[#b6a77c] mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border border-gray-200 rounded-lg bg-white shadow-sm">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none focus:ring"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform ${openIndex === idx ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div id={`faq-${idx}`} className="px-6 pb-4 text-gray-700 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
