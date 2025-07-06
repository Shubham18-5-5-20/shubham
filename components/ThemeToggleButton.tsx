// // components/ThemeToggleButton.tsx
// "use client";


// import { useTheme } from "./Themeprovider";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         background: 'none',
//         border: '1px solid var(--primary)',
//         borderRadius: '8px', // A slightly different style can look nice with text/emojis
//         padding: '0.5rem 0.75rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: '1.2rem' // Make emojis a bit bigger
//       }}
//       aria-label="Toggle theme"
//     >
//       {/* We use a span to easily hide one emoji while showing the other */}
//       {theme === 'light' ? '🌙' : '☀️'}
//     </button>
//   );
// }