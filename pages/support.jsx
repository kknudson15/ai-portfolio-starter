import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { apps } from '@/data/apps';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function SupportPage() {
    const router = useRouter();
    const { app: appQuery } = router.query;
    const [selectedApp, setSelectedApp] = useState(null);

    useEffect(() => {
        if (appQuery) {
            const app = apps.find(a => a.id === appQuery);
            if (app) setSelectedApp(app);
        } else if (apps.length > 0) {
            setSelectedApp(apps[0]);
        }
    }, [appQuery]);

    return (
        <main className="min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden">
            <Nav />

            {/* Background */}
            <motion.div
                className="absolute inset-0 -z-20 bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            <section className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 z-10">
                <div className="max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">App Support</h1>
                        <p className="text-lg text-gray-600">
                            Need help with one of my apps? Select the app below to find support information.
                        </p>
                    </motion.div>

                    {/* App Selection Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {apps.map((app) => (
                            <button
                                key={app.id}
                                onClick={() => setSelectedApp(app)}
                                className={`px-6 py-2 rounded-full transition-all border ${selectedApp?.id === app.id
                                    ? 'bg-black text-white border-black shadow-md'
                                    : 'bg-white/50 text-gray-700 border-gray-200 hover:bg-white'
                                    }`}
                            >
                                {app.name}
                            </button>
                        ))}
                    </div>

                    {selectedApp && (
                        <motion.div
                            key={selectedApp.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass rounded-3xl p-8 md:p-12 shadow-sm"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                                    <img src={selectedApp.icon} alt={selectedApp.name} className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-3xl font-bold">{selectedApp.name} Support</h2>
                            </div>

                            <div className="prose prose-blue max-w-none text-gray-700">
                                <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
                                <div className="space-y-6 mb-10">
                                    <div>
                                        <p className="font-bold text-black">How do I report a bug?</p>
                                        <p>Please use the form below to provide details about the issue, including your device model and iOS version.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-black">How do I request a feature?</p>
                                        <p>We love feedback! Tell us what you&apos;d like to see in the next update using the form below.</p>
                                    </div>
                                </div>

                                <hr className="my-10 border-gray-200" />

                                <h3 className="text-xl font-semibold mb-6">Contact Support</h3>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target);
                                        const subject = encodeURIComponent(`Support Request: ${selectedApp.name}`);
                                        const body = encodeURIComponent(
                                            `App: ${selectedApp.name}\n` +
                                            `From: ${formData.get('name')} (${formData.get('email')})\n\n` +
                                            `Message:\n${formData.get('message')}`
                                        );
                                        window.location.href = `mailto:kyle.knudson2015@gmail.com?subject=${subject}&body=${body}`;
                                    }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="p-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="p-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="How can we help?"
                                        rows={5}
                                        className="p-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-8 py-6 text-lg self-start shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Send Support Request
                                    </Button>
                                </form>

                                <p className="mt-6 text-sm text-gray-500">
                                    Direct support email: <a href="mailto:kyle.knudson2015@gmail.com" className="text-blue-600 hover:underline">kyle.knudson2015@gmail.com</a>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main >
    );
}
