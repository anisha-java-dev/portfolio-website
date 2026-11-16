// src/sections/Contact.jsx
import { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  // Handle input change dynamically using event target name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all fields.' });
      return;
    }

    // 2. Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    // Your EmailJS credentials
    const SERVICE_ID = 'service_6mu655l';
    const TEMPLATE_ID = 'template_dham7an';
    const PUBLIC_KEY = 'U3PkFaw0FL7Dqlz8Y';

    // Parameters matching the variables in your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Real EmailJS send call
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS delivery error:', err);
        setStatus({
          submitting: false,
          success: false,
          error: `Failed to send: ${err?.text || err?.message || 'Check EmailJS configuration'}`
        });
      });
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Have an opportunity or question? Feel free to reach out. I will get back to you promptly.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {status.success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle className="text-emerald-500 w-12 h-12 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Thank you for reaching out. Your message has been delivered to my inbox!
            </p>
            <button
              onClick={() => setStatus(prev => ({ ...prev, success: false }))}
              className="mt-6 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status.error && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg">
                <AlertCircle size={16} className="shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              {status.submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;