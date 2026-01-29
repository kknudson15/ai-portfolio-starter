import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { apps } from '@/data/apps';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';

export default function PrivacyPage() {
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
        <main className="min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
            <SEO
                title="Privacy Policy"
                description="Privacy information for apps built by Kyle Knudson."
            />
            <Nav />
            <div className="noise-overlay" />

            <section className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 z-10">
                <div className="max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 font-outfit text-slate-900 dark:text-white">Privacy Policy</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Your privacy is important. Select an app below to view its specific privacy policy.
                        </p>
                    </motion.div>

                    {/* App Selection Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {apps.map((app) => (
                            <button
                                key={app.id}
                                onClick={() => setSelectedApp(app)}
                                className={`px-8 py-3 rounded-full font-bold transition-all border-2 ${selectedApp?.id === app.id
                                    ? 'bg-blue-500 text-white border-blue-500 shadow-xl shadow-blue-500/20'
                                    : 'bg-white/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-slate-700/50 backdrop-blur-md'
                                    }`}
                            >
                                {app.name}
                            </button>
                        ))}
                    </div>

                    {selectedApp && (
                        <motion.div
                            key={selectedApp.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 shadow-2xl border border-white/20 dark:border-white/10"
                        >
                            <div className="flex items-center gap-8 mb-12">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                                    <img src={selectedApp.icon} alt={selectedApp.name} className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 dark:text-white">{selectedApp.name}</h2>
                            </div>

                            <div className="prose prose-slate dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p className="mb-10 font-bold text-blue-500 uppercase tracking-widest text-sm">Last Updated: January 7, 2026</p>

                                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">1. Information Collection</h3>
                                <p className="mb-10">
                                    <strong>{selectedApp.name}</strong> does not collect any personally identifiable information. Any data you enter into the app remains strictly on your device.
                                </p>

                                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">2. Data Usage</h3>
                                <p className="mb-10">
                                    Since no data is collected or transmitted to external servers, your data is never sold, shared, or used for advertising purposes.
                                </p>

                                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">3. Third-Party Services</h3>
                                <p className="mb-10">
                                    The app may use Apple standard services (like iCloud for synchronization if enabled). These services are governed by Apple&apos;s own privacy policy.
                                </p>

                                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">4. Changes to This Policy</h3>
                                <p className="mb-10">
                                    I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                                </p>

                                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">5. Contact</h3>
                                <p>
                                    If you have questions about this policy, please contact me through the support page.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
