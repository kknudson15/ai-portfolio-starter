import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 relative overflow-hidden">
            <Nav />

            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 -z-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            />

            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10"
                    style={{
                        width: `${40 + i * 30}px`,
                        height: `${40 + i * 30}px`,
                        top: `${15 + i * 12}%`,
                        left: `${10 + i * 15}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6 + i * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* 404 Content */}
            <section className="flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="mb-8"
                >
                    <h1 className="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent drop-shadow-lg">
                        404
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                    Oops! Page not found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/80 text-lg max-w-md mb-8"
                >
                    The page you&apos;re looking for seems to have wandered off into the digital cosmos. Let&apos;s get you back on track.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-white text-[#667eea] hover:bg-white/90 rounded-full px-8 py-3 shadow-lg font-semibold flex items-center gap-2"
                        >
                            <Home size={20} />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-3 font-semibold flex items-center gap-2"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </Button>
                </motion.div>

                {/* Fun Easter Egg */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 text-white/50 text-sm"
                >
                    Error 404: Coffee break in progress ☕
                </motion.p>
            </section>

            <Footer />
        </main>
    );
}
