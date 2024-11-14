import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import "@/styles/globals.css";



export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

  }, []);

  return (
    <>
      <Navbar />
      <LoadingBar
        color="red"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )



}
