// app/about/page.tsx
import Link from 'next/link';
import FadeIn from "@/components/FadeIn"; // Import your animation component

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem' }}>
      
      {/* --- HERO SECTION --- */}
      <FadeIn>
        <section style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.3 }}>
            I&#39;m Shubham. I don&#39;t just build websites, I build experiences.
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem',
            maxWidth: '700px',
            margin: '1.5rem auto 0'
          }}>
            I am a product-minded Frontend Developer with a passion for turning ambitious ideas into reality. My focus is on crafting interfaces that are not only beautiful and performant but also intuitive and accessible to everyone.
          </p>
        </section>
      </FadeIn>

      {/* --- MAIN CONTENT (Two-Column Layout) --- */}
      <FadeIn delay={0.2}>
        <div className="about-layout"> {/* This class applies our responsive grid */}
          
          {/* --- NARRATIVE COLUMN --- */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>My Journey</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <p>
                My journey into development wasn&#39;t just about learning to code; it was about a desire to create and own something from start to finish. This drive led me to found <strong>RyvX</strong>, a minimalist content platform built on the principles of speed, clarity, and thoughtful design.
              </p>
              <p>
                Taking RyvX from a simple idea to a live product taught me more than any single project ever could. I learned to architect a full-stack application, manage a database, think critically about user experience, and solve the myriad of problems that arise when you are responsible for the entire vision.
              </p>
              <p>
                This founder&#39;s mindset is what I bring to every project. I am driven by a deep sense of ownership and a commitment to not just completing tasks, but to building the <em>right</em> thing, the <em>right</em> way.
              </p>
            </div>
          </div>

          {/* --- SKILLS COLUMN --- */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>My Tech Stack</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Languages</h3>
                <p style={{ color: 'var(--text-secondary)' }}>TypeScript, JavaScript (ES6+), HTML5, CSS3</p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Frameworks & Libraries</h3>
                <p style={{ color: 'var(--text-secondary)' }}>React, Next.js, Framer Motion, dnd-kit</p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Tools & Platforms</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Vercel, Supabase, Git, GitHub, Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* --- BEYOND THE KEYBOARD --- */}
      <FadeIn delay={0.4}>
        <section style={{ padding: '6rem 0' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 600, marginBottom: '1rem' }}>Beyond the Keyboard</h2>
            <p style={{ 
                color: 'var(--text-secondary)', 
                maxWidth: '650px', 
                margin: '0 auto', 
                textAlign: 'center',
                lineHeight: 1.7
            }}>
                When I step away from the code, I&#39;m usually [exploring new hiking trails], [experimenting with a new recipe], or [getting lost in a good sci-fi novel]. I believe that a balanced life fuels creativity and better problem-solving.
            </p>
        </section>
      </FadeIn>
      
      {/* --- CALL TO ACTION --- */}
      <FadeIn delay={0.6}>
        <section style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Let&#39;s Build Something Together
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Have a project in mind or just want to connect? I&#39;d love to hear from you.
          </p>
          <Link href="/contact" className="button-primary">
            Get In Touch
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}