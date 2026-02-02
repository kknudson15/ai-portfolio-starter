import ChatWidget from '@/components/ChatWidget';
import { ThemeProvider } from '@/lib/ThemeContext';
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

import ErrorBoundary from '@/components/ErrorBoundary';

import Nav from '@/components/Nav';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <div className={`${outfit.variable} ${inter.variable} font-sans min-h-screen flex flex-col`}>
        <SEO />
        <NeuralNetwork3D />
        <Nav />
        <ErrorBoundary>
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
        </ErrorBoundary>
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;