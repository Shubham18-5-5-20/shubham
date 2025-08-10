// app/page.tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectSlider from '@/components/ProjectSlider'; // Make sure this path is correct
import { Project } from '@/types/Project'; // Make sure this path is correct

// The project data to be passed into the slider
const projectsData: Project[] = [
  {
    title: "RyvX-Founder & Developer",
    summary: "A content-focused personal website built with a 'less is more' philosophy. It's statically generated for extreme performance and features a minimalist, readable design.",
    techStack: ["Next.js","React.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ryvx.pro/",
    codeUrl: "https://github.com/Shubham18-5-5-20/RyvX",
    imageUrl: "/ryvx.png",
    videoUrl: "/ryvx.mp4"
  },
  {
    title: "StriveFlow",
    summary: "A Trello-inspired Kanban board for task management, featuring a fluid, accessible drag-and-drop interface to effortlessly organize workflows.",
    techStack: ["Next.js", "JavaScript", "dnd-kit"],
    liveUrl: "https://strive-flow.vercel.app/",
    codeUrl: "https://github.com/Shubham18-5-5-20/Strive-Flow",
    imageUrl: "/striveflow.png",
    videoUrl: "/striveflow.mp4",
  },
  {
    title: "Mood Tracker",
    summary: "A minimalist app to help users log and visualize their emotional well-being over time via a calendar view.",
    techStack: ["HTML", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://mood-tracker-theta-one.vercel.app/",
    codeUrl: "https://github.com/Shubham18-5-5-20/mood-tracker",
    imageUrl: "/mood-tracker.png",
    videoUrl: "/mood-tracker.mp4",
  },
  {
    title: "LinkFolio",
    summary: "A full-stack Linktree clone allowing users to create a personalized page for all their important links. Built with a focus on a seamless user experience and theme customization.",
    techStack: ["React.js", "JavaScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://link-folio-eight.vercel.app/",
    codeUrl: "https://github.com/Shubham18-5-5-20/catering-demo",
    imageUrl: "/linkfolio.png",
    videoUrl: "/linkfolio.mp4",
  },
{
    title: "Catering Demo",
    summary: "A modern, responsive catering website demo with an elegant layout, vibrant imagery, and a clean UI to showcase menus, services, and contact details.",
    techStack: ["React.js", "JavaScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://catering-demo.vercel.app/",
    codeUrl: "https://github.com/Shubham18-5-5-20/LinkFolio",
    imageUrl: "/demo-catering.png",
    videoUrl: "/demo-catering.mp4",
  },
];

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section (Unchanged) */}
      <motion.section 
        style={{ textAlign: 'center', padding: '6rem 1rem 4rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: 1.2 }}>
          Shubham
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          color: 'var(--text-secondary)', 
          marginTop: '1rem',
          maxWidth: '600px',
          margin: '1rem auto 0'
        }}>
          A Frontend Developer creating intuitive, performant, and beautiful user interfaces.
        </h2>
        
        <div style={{ marginTop: '2.5rem' }}>
          <Link 
            href="/contact" 
            className="button-primary"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--accent)',
              color: '#111111',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Contact Me
          </Link>
        </div>
      </motion.section>

      {/* 2. Projects Section (UPDATED) */}
      <motion.section 
        style={{ padding: '4rem 0' }} // Adjusted padding for a slider
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '4rem'
        }}>
          My Work
        </h2>
        {/* --- The static grid is replaced by the ProjectSlider component --- */}
        <ProjectSlider projects={projectsData} />
      </motion.section>

      {/* 3. The "Portfolio" Project Section (Unchanged) */}
      <motion.section 
        style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--card-background)', borderRadius: '12px', margin: '4rem 0' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
         <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>This Portfolio</h3>
         <p style={{ margin: '1rem 0', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
           This very site was designed and built by me to act as a central hub for my work.
         </p>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
           <a href="https://github.com/Shubham18-5-5-20/shubham" target="_blank" rel="noopener noreferrer" className="button-primary">
             View The Code
           </a>
         </div>
      </motion.section>  
    </div>
  );
}
