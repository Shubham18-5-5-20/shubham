export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  imageUrl: string;
  videoUrl?: string; // Optional: Not every project might have a video
  liveUrl?: string;  // Optional: A project might not be deployed yet
  codeUrl?: string;  // Optional: A project might be private/closed-source
}