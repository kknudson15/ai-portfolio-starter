import ChatWidget from '@/components/ChatWidget';
import { ThemeProvider } from '@/lib/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import SEO from '@/components/SEO';
import { Outfit, Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), { ssr: false });

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <div className={`${outfit.variable} ${inter.variable} font-sans`}>
        <SEO />
        <NeuralNetwork3D />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;