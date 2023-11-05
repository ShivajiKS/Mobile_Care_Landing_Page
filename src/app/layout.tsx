import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./_components/ui/NavBar";
import keywords from "./utils/keywords";

export const metadata: Metadata = {
  title: "Mobile care",
  description:
    "Srinu Mobiles is a leading mobile repair shop in kukataplly housing board KPHB, Hyderabad, India. We offer a wide range of services, including screen repair, battery replacement, software updates, data recovery, and virus removal. We also specialize in repairing high-end devices, such as iPhones and Samsung, Mi, Realme, vivom oppo phones etc...",
  keywords: keywords,
  applicationName: "Srinu Mobile Care",
  authors: [{ name: "kondeti shivaji" }],
  creator: "kondeti Shivaji",
  publisher: "Srinu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col box-border">
        <header>
          <Navbar />
        </header>
        <div className="grow">{children}</div>
        <footer className="h-16 flex justify-center items-center text-lg md:text-xl font-bold">
          <h2>@SHIVAJI</h2>
        </footer>
      </body>
    </html>
  );
}
