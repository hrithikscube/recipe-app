import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/404') {
    return <Component {...pageProps} />;
  }

  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
