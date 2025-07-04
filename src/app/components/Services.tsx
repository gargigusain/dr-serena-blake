'use client';
import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/images/service-anxiety.jpeg",
    description:
      "Learn practical tools to manage anxiety, stress, and overwhelm. Dr. Blake uses evidence-based approaches like cognitive-behavioral therapy and mindfulness to help you regain calm, build resilience, and feel more in control of your daily life.",
  },
  {
    title: "Relationship Counseling",
    image: "/images/service-relationship.jpeg",
    description:
      "Strengthen your relationships and improve communication. Whether you're facing challenges with a partner, family member, or friend, Dr. Blake provides a supportive space to explore patterns, resolve conflict, and foster deeper connection.",
  },
  {
    title: "Trauma Recovery",
    image: "/images/service-trauma.jpeg",
    description:
      "Heal from past trauma in a safe, compassionate environment. Dr. Blake integrates trauma-informed care and gentle therapeutic techniques to help you process difficult experiences, restore a sense of safety, and move forward with hope.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#f7f5ef] py-20 px-4">
      <h2 className="font-serif text-lg text-[#b6a77c] text-center mb-10">Areas of Focus</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
              <Image
                src={service.image}
                alt={service.title}
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-serif text-md text-[#b6a77c] mb-2 text-center">{service.title}</h3>
            <p className="text-gray-700 text-xs text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
