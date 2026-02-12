import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Sai Arun | AI Engineer",
  description: "AI Engineer | Generative AI | Computer Vision | Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
