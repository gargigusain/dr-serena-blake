'use client';

import React, { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  preferredTime: "",
  agree: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email address.";
    if (!form.message.trim()) newErrors.message = "Please let us know what brings you here.";
    if (!form.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-8" id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
        Contact Dr. Blake
      </h2>
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded text-center">
          Thank you for reaching out! Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-800 mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black ${errors.name ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-800 mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black ${errors.phone ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-800 mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black ${errors.email ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-800 mb-1">
            What brings you here?<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black ${errors.message ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div>
          <label htmlFor="preferredTime" className="block font-medium text-gray-800 mb-1">
            Preferred time to reach you<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black ${errors.preferredTime ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className={`mr-2 accent-blue-600 ${errors.agree ? "ring-2 ring-red-500" : ""}`}
          />
          <label htmlFor="agree" className="text-gray-800">
            I agree to be contacted<span className="text-red-500">*</span>
          </label>
        </div>
        {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 text-lg shadow transition-colors duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
