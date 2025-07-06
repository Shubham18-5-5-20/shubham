// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/Themeprovider"; 
import Navbar from "@/components/Navbar";
// --- DELETE THE DYNAMIC IMPORT FOR NEONCURSOR FROM THIS FILE ---

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham - Frontend Developer",
  description: "Portfolio of a passionate frontend developer.",
};

const setInitialTheme = `
  (function() {
    function getInitialTheme() {
      const storedTheme = window.localStorage.getItem('theme');
      if (typeof storedTheme === 'string') {
        return storedTheme;
      }
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        return 'dark';
      }
      return 'dark';
    }
    const theme = getInitialTheme();
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {/* --- THE NEON CURSOR IS NO LONGER HERE --- */}
          <Navbar />
          <main style={{ padding: '1rem 2rem' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}