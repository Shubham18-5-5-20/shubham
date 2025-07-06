// In: types/threejs-toys.d.ts

declare module 'threejs-toys' {
  /**
   * Defines the options for the neonCursor effect.
   */
  interface NeonCursorOptions {
    el?: HTMLElement;
    shaderPoints?: number;
    curvePoints?: number;
    curveLerp?: number;
    radius1?: number;
    radius2?: number;
    velocityTreshold?: number;
    sleepRadiusX?: number;
    sleepRadiusY?: number;
    sleepTimeCoefX?: number;
    sleepTimeCoefY?: number;
  }

  /**
   * Initializes the neon cursor effect.
   * @param options Configuration object for the cursor effect.
   */
  export function neonCursor(options?: NeonCursorOptions): void;
}