// app/layout.tsx
import "../styles/index.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],              // add "latin-ext" if you use extended characters
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",      // ← expose a variable
  preload: true,
});

export const metadata = {
  title: "Lexington Ashworth",
  description: "Immigration solicitors in Manchester",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* Apply Tailwind class that uses the variable */}
      <body className="font-poppins">{children}</body>
    </html>
  );
}

