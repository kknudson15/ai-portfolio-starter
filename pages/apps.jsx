import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { apps } from '@/data/apps';
import { useRouter } from 'next/router';

export default function AppsPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
            <Nav />
            <div className="noise-overlay" />

            <section className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-4 font-outfit text-slate-900 dark:text-white">My Apps</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Discover the apps I&apos;ve built and published to the App Store.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
                    {apps.map((app) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col md:flex-row gap-8 shadow-2xl border border-white/20 dark:border-white/10 group hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h2 className="text-3xl font-bold mb-3 font-outfit text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{app.name}</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">{app.description}</p>

                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <Button
                                        asChild
                                        className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-8 py-6 h-auto font-bold shadow-lg shadow-blue-500/20"
                                    >
                                        <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                                            App Store
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-8 py-6 h-auto font-bold border-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all"
                                        onClick={() => router.push(app.supportUrl)}
                                    >
                                        Support
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-8 py-6 h-auto font-bold border-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all"
                                        onClick={() => router.push(app.privacyUrl)}
                                    >
                                        Privacy
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
