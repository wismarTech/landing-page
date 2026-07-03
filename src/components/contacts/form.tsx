'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white relative px-6 lg:px-24 py-24">
      <div className="max-w-3xl mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B58F6]/20 focus:border-[#5B58F6] transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="john@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B58F6]/20 focus:border-[#5B58F6] transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={6}
              placeholder="Tell us about your project, question, or idea..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B58F6]/20 focus:border-[#5B58F6] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#5B58F6] hover:bg-[#4a47e6] disabled:opacity-60 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 group"
          >
            {status === 'sending' ? (
              <>Sending...</>
            ) : (
              <>
                <span className="text-base font-medium tracking-tight">Send Message</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:translate-x-1 transition-transform duration-300">
                  <Send className="w-4 h-4" />
                </div>
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              Something went wrong. Please try again or email us directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
