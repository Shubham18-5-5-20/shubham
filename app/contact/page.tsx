// app/contact/page.tsx
"use client";

import FadeIn from "@/components/FadeIn";
import { Mail, Github, Linkedin } from 'lucide-react';
// import ContactForm from '@/components/ContactForm'; // Import the form component

// Array to hold your social links for easy mapping
const socialLinks = [
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shubham339712@gmail.com', // <-- IMPORTANT: UPDATE THIS
    icon: Mail
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Shubham18-5-5-20', // <-- IMPORTANT: UPDATE THIS
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubham-bhardwaj-h07s12', // <-- IMPORTANT: UPDATE THIS
    icon: Linkedin
  },
];

export default function ContactPage() {
  return (
    <FadeIn>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        
        {/* --- HERO SECTION --- */}
        <section style={{ padding: '4rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.3 }}>
            Let&#39;s Build Something Together
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem',
            maxWidth: '600px',
            margin: '1.5rem auto 0'
          }}>
            I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out in whichever way you prefer.
          </p>
        </section>

        {/* --- DIRECT LINKS SECTION --- */}
        <section style={{ padding: '2rem 0' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--card-background)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* --- DIVIDER --- */}
        <div style={{ margin: '4rem auto', width: '50px', height: '1px', background: 'var(--card-border)' }}></div>

        {/* --- CONTACT FORM SECTION --- */}
        <section>
          {/* <ContactForm /> */}
        </section>

      </div>
    </FadeIn>
  );
}