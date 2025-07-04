"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';

type ProjectCardProps = {
  title: string;
  summary: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  imageUrl: string;
  videoUrl?: string;
};

export default function ProjectCard({
  title,
  summary,
  techStack,
  liveUrl,
  codeUrl,
  imageUrl,
  videoUrl,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div 
      style={{
        backgroundColor: 'var(--card-background)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // This is kept to make all cards the same height
        boxShadow: 'var(--shadow-md)', 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* --- MEDIA CONTAINER --- */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Image 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          layout="fill" 
          objectFit="cover"
        />
        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out'
            }}
          />
        )}
      </div>
      
      {/* --- CONTENT CONTAINER --- */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ margin: '0.75rem 0', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>
          {summary}
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: 'auto' }}>
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
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
            Live Demo
          </a>

          {/* --- THIS IS YOUR ORIGINAL BUTTON CODE, RESTORED --- */}
          <a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, color 0.2s ease' // Added a transition for hover
            }}
            // You can add a simple hover effect directly here if you like
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}