import "../styles/index.css"; // ✅ CORRECT path (from app/layout.tsx)
// app/layout.tsx (App Router)

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Lexington Ashworth',
  description: 'Immigration solicitors in Manchester',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
