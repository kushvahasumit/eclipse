import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/nav";
import Sidebar from "../components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eclipse",
  description: "Find & apply for jobs easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <div className="fixed top-0 left-0 w-full z-50 text-white shadow-md">
            <Navbar />
          </div>
          <div className="flex flex-1 pt-20 bg-gray-100">
            <div className="w-1/5 bg-gray-800">
              <Sidebar />
            </div>
            <main className="flex-1 p-6 dark:bg-gray-900 text-black dark:text-white">
              {children}
            </main>
          </div>
        </div>
      </body>

    </html>
  );
}
