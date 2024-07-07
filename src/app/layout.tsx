import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamline Researchers",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
      <header className="header">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 2rem' }}>
            <div style={{ flex: 1 }}>
              <a href="/"><Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} /></a>
            </div>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', flex: 2, justifyContent: 'center' }}>
              <li><Link href="#" className="body-text">Find Tutors</Link></li>
              <li><Link href="#" className="body-text">Become a Tutor</Link></li>
              <li><Link href="/contacts" className="body-text">Contact Us</Link></li>
              <li><Link href="/about" className="body-text">About Us</Link></li>
            </ul>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="bg-blue-500 text-white py-1 px-4 rounded">Log In</button>
            <button className="bg-blue-500 text-white py-1 px-4 rounded">Sign Up</button>
            </div>
          </nav>
        </header>
        {children}
        <footer className="body-text" style={{ backgroundColor: "ghostwhite", padding: "1rem"}}>
          <h3>&copy; 2024 Streamline Researchers. All rights reserved.</h3>
        </footer>
        </body>
    </html>
  )
}
