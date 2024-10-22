import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar"
import Header from "@/components/Header";
import Founder from "@/components/Founder";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
     
      <Header />
      <Founder />
      <Map />
   
    </>
  );
}
