// components/Hero.tsx (or directly in app/page.tsx)

export default function Hero() {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '4rem 1rem' 
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: 'bold', 
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
      }}>
        Your Name
      </h1>
      <h2 style={{ 
        fontSize: '1.5rem', 
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        fontWeight: 400
      }}>
        Frontend Developer & UI/UX Enthusiast
      </h2>
      <a href="/contact" className="button-primary">
        Get In Touch
      </a>
    </section>
  );
}