import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { apps } from '@/data/apps';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
        <main className="min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden">
            <Nav />

            {/* Background */}
            <motion.div
                className="absolute inset-0 -z-20 bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc]"
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
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
                        <p className="text-lg text-gray-600">
                            Your privacy is important. Select an app below to view its specific privacy policy.
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
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass rounded-3xl p-8 md:p-12 shadow-sm"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                                    <img src={selectedApp.icon} alt={selectedApp.name} className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-3xl font-bold">{selectedApp.name} Privacy Policy</h2>
                            </div>

                            <div className="prose prose-blue max-w-none text-gray-700">
                                <p className="mb-6 italic">Last Updated: January 7, 2026</p>

                                <h3 className="text-xl font-semibold mb-3">1. Information Collection</h3>
                                <p className="mb-6">
                                    <strong>{selectedApp.name}</strong> does not collect any personally identifiable information. Any data you enter into the app remains strictly on your device.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">2. Data Usage</h3>
                                <p className="mb-6">
                                    Since no data is collected or transmitted to external servers, your data is never sold, shared, or used for advertising purposes.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">3. Third-Party Services</h3>
                                <p className="mb-6">
                                    The app may use Apple standard services (like iCloud for synchronization if enabled). These services are governed by Apple&apos;s own privacy policy.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">4. Changes to This Policy</h3>
                                <p className="mb-6">
                                    I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">5. Contact</h3>
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
