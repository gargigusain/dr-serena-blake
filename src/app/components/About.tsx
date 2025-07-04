'use client';
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-serif text-lg text-[#b6a77c] mb-4">About Dr. Serena Blake</h2>
          <p className="text-gray-800 text-sm leading-relaxed mb-2">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <div className="mt-4 text-xs text-gray-700">
            <div><b>Location:</b> 1287 Maplewood Drive, Los Angeles, CA 90026</div>
            <div><b>Phone:</b> <a href="tel:3235550192" className="underline"> (323) 555-0192</a></div>
            <div><b>Email:</b> <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a></div>
            <div><b>Office Hours:</b> In-person: Tue & Thu, 10 AM–6 PM | Virtual: Mon, Wed & Fri, 1 PM–5 PM</div>
            <div><b>Experience:</b> 8 years, 500+ sessions</div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/dr-serena-blake.jpg"
            alt="Dr. Serena Blake headshot"
            width={260}
            height={320}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
