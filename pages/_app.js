import "@/styles/globals.scss";
import MyLayout from "@/components/MyLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
