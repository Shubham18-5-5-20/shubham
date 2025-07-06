// In: components/ProjectSlider.tsx

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

import { Project } from '../types/Project.tsx';
import styles from './ProjectSlider.module.css';

const OPTIONS: EmblaOptionsType = { 
  loop: true,       
  align: 'start',
  slidesToScroll: 1,
};

// --- (Button components are unchanged) ---
const PrevButton = ({ enabled, onClick }: { enabled: boolean, onClick: () => void }) => (
  <button className={styles.embla__button} onClick={onClick} disabled={!enabled}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>
);
const NextButton = ({ enabled, onClick }: { enabled: boolean, onClick: () => void }) => (
  <button className={`${styles.embla__button} ${styles.embla__button__next}`} onClick={onClick} disabled={!enabled}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>
);

interface Props {
  projects: Project[];
}

const ProjectSlider: React.FC<Props> = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({
      delay: 1500,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  ]);
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    
    // --- THIS IS THE CORRECTED SECTION ---
    const rootNode = emblaApi.rootNode();
    const viewportNode = rootNode.querySelector(`.${styles.embla__viewport}`);

    if (!viewportNode) return; // Exit if the viewport isn't found
    
    const onPointerEnter = () => {
      autoplay.stop();
    };
    const onPointerLeave = () => {
      autoplay.play();
    };

    viewportNode.addEventListener('pointerenter', onPointerEnter);
    viewportNode.addEventListener('pointerleave', onPointerLeave);

    // Cleanup
    return () => {
      viewportNode.removeEventListener('pointerenter', onPointerEnter);
      viewportNode.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [emblaApi]);


  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {projects.map((project, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__content}>
                <div className={styles.project_media}>
                  {project.videoUrl ? ( <video src={project.videoUrl} autoPlay loop muted playsInline className={styles.project_video}/>) : ( <img src={project.imageUrl} alt={project.title} className={styles.project_image} />)}
                </div>
                <div className={styles.project_details}>
                  <h3 className={styles.project_title}>{project.title}</h3>
                  <p className={styles.project_summary}>{project.summary}</p>
                  <div className={styles.tech_stack}>
                    {project.techStack.map((tech) => (<span key={tech} className={styles.tech_tag}>{tech}</span>))}
                  </div>
                  <div className={styles.project_links}>
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>}
                    {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={!prevBtnDisabled} />
      <NextButton onClick={scrollNext} enabled={!nextBtnDisabled} />
    </div>
  );
};

export default ProjectSlider;