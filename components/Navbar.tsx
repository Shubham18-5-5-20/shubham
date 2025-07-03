// components/Navbar.tsx
"use client"; // 1. This component is now a Client Component

import Link from 'next/link';
// 2. Import the usePathname hook from Next.js
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navbar() {
  // 3. Get the current URL path
  const pathname = usePathname();

  // 4. Define styles for active and inactive links
  const activeLinkStyle = {
    color: 'var(--text-primary)',
    fontWeight: 600, // Make it bolder
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.2s ease-in-out',
  };

  const inactiveLinkStyle = {
    color: 'var(--text-secondary)',
    fontWeight: 500, // Normal weight
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.2s ease-in-out',
  };

  return (
    <header style={{
      padding: '1rem 2rem',
      borderBottom: '1px solid var(--card-border)',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(var(--background-rgb), 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      zIndex: 50,
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left-side placeholder for balance */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          {/* Future logo can go here */}
        </div>

        {/* Center-aligned navigation links */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
          {/* 5. Apply styles conditionally based on the current path */}
          <Link href="/" style={pathname === '/' ? activeLinkStyle : inactiveLinkStyle} className="nav-link">
            Home
          </Link>
          <Link href="/about" style={pathname === '/about' ? activeLinkStyle : inactiveLinkStyle} className="nav-link">
            About
          </Link>
          <Link href="/contact" style={pathname === '/contact' ? activeLinkStyle : inactiveLinkStyle} className="nav-link">
            Contact
          </Link>
        </div>

        {/* Right-aligned theme toggler */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}