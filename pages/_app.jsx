import ChatWidget from '@/components/ChatWidget';
import { ThemeProvider } from '@/lib/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import SEO from '@/components/SEO';

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
      <SEO />
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
    </ThemeProvider>
  );
}

export default MyApp;