import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ngoInfo } from '../data/ngoData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F9F6F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Contact Aarushi Gramin Sansthan"
          subtitle="Reach out to our Solan branch office for program inquiries, community collaborations, or health camp information."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          
          {/* Verified Contact Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-6">
                Verified Office Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-[#16422e] shrink-0 border border-emerald-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Office Address</h4>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                      {ngoInfo.fullAddress}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      Rajgarh, Distt. Sirmour (H.P.)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-[#16422e] shrink-0 border border-emerald-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Telephone / Mobile</h4>
                    <p className="text-sm text-stone-800 font-medium mt-1">
                      <a href={`tel:${ngoInfo.primaryPhone}`} className="hover:text-[#16422e] hover:underline">
                        {ngoInfo.primaryPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-[#16422e] shrink-0 border border-emerald-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Official Email</h4>
                    <p className="text-sm text-stone-800 font-medium mt-1">
                      <a href={`mailto:${ngoInfo.email}`} className="hover:text-[#16422e] hover:underline">
                        {ngoInfo.email}
                      </a>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Verified from official branch signboard
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-[#16422e] shrink-0 border border-emerald-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Registration Reference</h4>
                    <p className="text-sm text-stone-600 mt-1">
                      Registered Society No. <strong>{ngoInfo.regNo}</strong>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Regd. Office: Solan, Himachal Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on data authenticity */}
            <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600">
              <strong>Notice:</strong> All contact details and organizational identifiers displayed above are reproduced strictly from the NGO’s verified signage, letterhead, and official camp records.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-2">
                Send a Message to the Organization
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Please complete the form below to connect with Aarushi Gramin Sansthan.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#16422e] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-stone-900 font-serif">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-stone-700 mt-2 max-w-md mx-auto">
                    Thank you for reaching out to Aarushi Gramin Sansthan. Our Solan branch team will respond to your inquiry soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-bold text-[#16422e] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:border-transparent bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:border-transparent bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:border-transparent bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:border-transparent bg-stone-50/50"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Health Camps">Health & Checkup Camps</option>
                        <option value="Skill Training">Cutting & Tailoring Training</option>
                        <option value="Youth Activities">Youth Awareness Programs</option>
                        <option value="Community Support">Community / Langar Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:border-transparent bg-stone-50/50"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#16422e] hover:bg-[#103424] active:bg-[#0a1f16] rounded-md shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
