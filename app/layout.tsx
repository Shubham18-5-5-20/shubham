// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your font of choice
import "./globals.css";

// Import the ThemeProvider we just created
import { ThemeProvider } from "@/components/Themeprovider"; 

// Import your Navbar component
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham - Frontend Developer",
  description: "Portfolio of a passionate frontend developer.",
};

// This is the crucial script to prevent the theme flash.
// It runs before React hydrates, setting the theme from localStorage or system preference.
const setInitialTheme = `
  (function() {
    function getInitialTheme() {
      // 1. Check for a saved theme in localStorage
      const storedTheme = window.localStorage.getItem('theme');
      if (typeof storedTheme === 'string') {
        return storedTheme;
      }

      // 2. Check for the user's system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        return 'dark';
      }

      // 3. Fallback to your default theme (dark)
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
    // 'suppressHydrationWarning' is essential here to prevent React from
    // complaining about the 'data-theme' attribute added by our script.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject the anti-flicker script into the head */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={inter.className}>
        {/* Wrap the entire application with the ThemeProvider */}
        <ThemeProvider>
          {/* Your Navbar will now have access to the theme context */}
          <Navbar />
          <main style={{ padding: '1rem 2rem' }}>
            {children}
          </main>
          {/* You could also add a Footer component here */}
        </ThemeProvider>
      </body>
    </html>
  );
}