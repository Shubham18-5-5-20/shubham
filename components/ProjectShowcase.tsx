// components/ProjectShowcase.tsx
// import Link from 'next/link';
import Image from 'next/image';

// AFTER
type ProjectProps = {
  title: string;
  summary: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  imageUrl: string;
};

export default function ProjectShowcase({
  title,
  summary,
  techStack,
  liveUrl,
  codeUrl,
  imageUrl,
}: ProjectProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      alignItems: 'center',
      marginBottom: '6rem', // Space between projects
    }}>
      {/* Image Column */}
      <div style={{
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      }}>
        {/* Replace with your actual screenshot */}
        <Image src={imageUrl} alt={`${title} screenshot`} width={1200} height={750} style={{ width: '100%', height: 'auto' }} />
      </div>
      
      {/* Text Column */}
      <div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ margin: '1rem 0', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {summary}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {techStack.map(tech => (
            <span key={tech} style={{
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: 'var(--accent)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
            Live Demo
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}