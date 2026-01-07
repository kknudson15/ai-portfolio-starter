import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { apps } from '@/data/apps';
import { useRouter } from 'next/router';

export default function AppsPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col transition-colors duration-500 relative overflow-hidden">
            <Nav />

            {/* Background */}
            <motion.div
                className="absolute inset-0 -z-20 bg-gradient-to-br from-[#a1c4fd] via-[#c2e9fb] to-[#d4fc79]"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <section className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">My Apps</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the apps I've built and published to the App Store.
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
                            className="glass rounded-3xl p-8 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                                <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold mb-2">{app.name}</h2>
                                <p className="text-gray-600 mb-6 flex-grow">{app.description}</p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <Button
                                        asChild
                                        className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-6"
                                    >
                                        <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                                            App Store
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-6"
                                        onClick={() => router.push(app.supportUrl)}
                                    >
                                        Support
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-6"
                                        onClick={() => router.push(app.privacyUrl)}
                                    >
                                        Privacy Policy
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
