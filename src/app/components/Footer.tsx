'use client';
export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f5ef] py-8 px-4">
      <div className="max-w-5xl mx-auto text-left text-gray-800 text-xs font-serif">
        Dr. Serena Blake, PsyD, Clinical Psychologist<br />
        <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a><br />
        Phone: <a href="tel:3235550192" className="underline">(323) 555-0192</a><br />
        1287 Maplewood Drive, Los Angeles, CA 90026<br />
        <br />
        &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
      </div>
    </footer>
  );
}
