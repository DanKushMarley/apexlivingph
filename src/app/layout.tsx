import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Apex Living International — Living & Travel",
  description: "Your global partner in real estate, flights, hotels, tours and visa assistance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#F7F4EE" }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
