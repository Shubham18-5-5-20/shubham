// components/ProjectCard.tsx
"use client";

import Image from 'next/image';
// 1. Import useState and useRef
import { useState, useRef } from 'react';

type ProjectCardProps = {
  title: string;
  summary: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  imageUrl: string; // The thumbnail image
  videoUrl?: string; // The optional hover video
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
  // 2. State to track the hover status
  const [isHovered, setIsHovered] = useState(false);

  // 3. Update hover handlers to manage state and playback
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
      // Optional: Reset video to the beginning on mouse out
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
      }}
      // We don't need the inline transform hover effects anymore if we're using video
      // But we still need the event handlers
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* --- MEDIA CONTAINER --- */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
        
        {/* The thumbnail image is always rendered */}
        <Image 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          layout="fill" 
          objectFit="cover"
        />
        
        {/* The video is rendered on top IF a videoUrl exists */}
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
              // 4. The opacity is controlled by the hover state, with a smooth transition
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out'
            }}
          />
        )}
      </div>
      
      {/* --- CONTENT CONTAINER (No changes needed here) --- */}
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
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}