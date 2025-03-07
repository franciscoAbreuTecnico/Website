import "@/styles/globals.scss";
import MyLayout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
