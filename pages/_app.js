import '@/styles/globals.css';
import MyLayout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
