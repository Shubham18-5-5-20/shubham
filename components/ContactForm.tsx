// // components/ContactForm.tsx
// "use client";

// import { useState } from 'react';

// export default function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     const formData = new FormData(event.currentTarget);
//     const response = await fetch('https://formspree.io/f/your_unique_code', { // <-- PASTE YOUR URL HERE
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       setIsSuccess(true);
//     } else {
//       setError('Something went wrong. Please try again later.');
//     }

//     setIsSubmitting(false);
//   }

//   if (isSuccess) {
//     return (
//       <p style={{ color: 'var(--accent)', fontSize: '1.2rem', textAlign: 'center' }}>
//         Thank you for your message! I&#39;ll get back to you soon.
//       </p>
//     );
//   }

//   const inputStyle = {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '8px',
//     border: '1px solid var(--card-border)',
//     backgroundColor: 'var(--background)',
//     color: 'var(--text-primary)',
//     fontSize: '1rem'
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
//       <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
//       <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
//       <textarea name="message" placeholder="Your Message" required rows={5} style={inputStyle}></textarea>
//       <button type="submit" disabled={isSubmitting} className="button-primary">
//         {isSubmitting ? 'Sending...' : 'Send Message'}
//       </button>
//       {error && <p style={{ color: '#f87171' }}>{error}</p>}
//     </form>
//   );
// }