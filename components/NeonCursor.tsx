// In: components/NeonCursor.tsx

"use client";

import { useEffect } from 'react';
import { neonCursor } from 'threejs-toys';

const NeonCursor = () => {
  useEffect(() => {
    // This hook runs once when the component mounts.
    neonCursor({
      el: document.body, // The element to attach the effect to
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    });
  }, []); // The empty dependency array ensures this runs only once.

  return null; // This component doesn't render any visible HTML itself.
};

export default NeonCursor;