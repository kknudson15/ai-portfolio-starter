import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Nav />

      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <section className="w-full max-w-2xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Contact
        </motion.h2>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-3 rounded-lg border border-gray-300" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded-lg border border-gray-300" required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="p-3 rounded-lg border border-gray-300" rows={5} required />
          <button type="submit" className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-6 py-3 shadow-lg">Send Message</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}