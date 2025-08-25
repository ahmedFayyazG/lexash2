// app/layout.tsx
import "../styles/index.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const metadata = {
  title: "Lexington Ashworth",
  description: "Immigration solicitors in Manchester",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
