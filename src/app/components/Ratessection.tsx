'use client';
export default function RatesSection() {
  return (
    <section className="w-full bg-[#97b6b7] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-lg text-gray-900 mb-4">Session Fees</h2>
        <p className="text-gray-900 text-sm mb-2">$200 / individual session</p>
        <p className="text-gray-900 text-sm mb-2">$240 / couples session</p>
        <p className="text-gray-900 text-xs mb-2">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>
        <p className="text-gray-900 text-xs">
          For out-of-network plans, I've partnered with Mentaya using this tool to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
