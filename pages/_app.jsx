import ChatWidget from '@/components/ChatWidget';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  );
}

export default MyApp;