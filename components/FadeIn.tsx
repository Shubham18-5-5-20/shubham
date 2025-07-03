// components/FadeIn.tsx
"use client";

import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      // 1. Define the animation variants
      variants={{
        hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
        visible: { opacity: 1, y: 0 },   // End visible and at its original position
      }}
      // 2. Set the initial state
      initial="hidden"
      // 3. Animate to the "visible" state when the component is in view
      whileInView="visible"
      // 4. Configure the transition
      transition={{ 
        duration: 0.5, 
        delay: delay 
      }}
      // 5. Advanced: trigger the animation only once
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}