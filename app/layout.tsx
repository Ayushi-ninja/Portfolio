import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayushi Rajput — Full Stack Developer",
  description:
    "Portfolio of Ayushi Rajput, Full Stack Developer & CS Student. MERN stack, AWS, AI/ML, Hackathon Winner.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
