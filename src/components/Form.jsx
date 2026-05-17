import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(); // step 1: form reference

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page refresh

    emailjs.sendForm(
      "service_mmzhp9p",    // replace with your EmailJS service ID
      "template_3nswa9p",   // your template ID
      form.current,
      "nKlxIyeSnGDEJuy1c"   // your public key
    )
    .then(() => {
      alert("Email sent successfully! 🚀");
      e.target.reset(); // optional: clear the form
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send email: " + err.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
        />
      </div>

      <input
        type="text"
        name="business"
        placeholder="Business Name"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
      />

      <select
        name="package"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
      >
        <option value="" className="bg-slate-800">Select Package Interest</option>
        <option value="starter" className="bg-slate-800">Starter - $650</option>
        <option value="professional" className="bg-slate-800">Professional - $1,500</option>
        <option value="premium" className="bg-slate-800">Premium - $3,000</option>
        <option value="custom" className="bg-slate-800">Custom Solution</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your business and what you need..."
        rows="4"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get My Free Quote 🚀
      </button>

      <p className="text-white/60 text-sm text-center">
        We'll respond within 2 hours during business hours
      </p>
    </form>
  );
}
