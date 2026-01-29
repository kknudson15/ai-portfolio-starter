import { motion, AnimatePresence } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, User, MessageSquare } from 'lucide-react';
import dynamic from 'next/dynamic';
import SEO from '@/components/SEO';

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (_error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
      <SEO
        title="Contact"
        description="Get in touch with Kyle Knudson for collaboration or inquiries."
      />
      <Nav />
      <div className="noise-overlay" />
      <NeuralNetwork3D />

      <section className="w-full max-w-5xl px-6 py-32 z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white font-outfit tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">
            Have a question or want to work together? Drop me a message and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        <div className="w-full grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info / Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-outfit text-slate-900 dark:text-white">Quick Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Email Me</p>
                    <a href="mailto:kyle.knudson2015@gmail.com" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors">
                      kyle.knudson2015@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500 rounded-[2rem] p-8 text-white shadow-2xl shadow-blue-500/20">
              <h3 className="text-2xl font-black mb-4 font-outfit tracking-tight">Let&apos;s build something amazing.</h3>
              <p className="font-medium opacity-80 leading-relaxed">
                Whether it&apos;s AI strategy, data engineering, or a custom app, I&apos;m ready to help you innovate.
              </p>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl p-10 md:p-12 flex flex-col gap-8 border border-white/20 dark:border-white/10 relative overflow-hidden"
            >
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-2xl flex items-center gap-3 mb-4 ${submitStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                      }`}
                  >
                    {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <p className="font-bold text-sm">
                      {submitStatus === 'success' ? 'Message sent successfully!' : 'Something went wrong. Please try again.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div className="relative group">
                  <User className="absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-100 dark:border-white/5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-2 ml-2 font-bold uppercase tracking-wider">{errors.name}</p>}
                </div>

                <div className="relative group">
                  <Mail className="absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-100 dark:border-white/5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2 ml-2 font-bold uppercase tracking-wider">{errors.email}</p>}
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-100 dark:border-white/5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-2 ml-2 font-bold uppercase tracking-wider">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all group"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}