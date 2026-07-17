import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohd Shahid — Full Stack Developer",
  description:
    "Portfolio of Mohd Shahid, a full stack developer building modern, scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Faint blueprint grid */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="grid-global"
                  width="64"
                  height="64"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 64 0 L 0 0 0 64"
                    fill="none"
                    stroke="#F2F1EC"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-global)" />
            </svg>
          </div>

          {/* Single warm glow, upper right */}
          <div className="absolute w-[640px] h-[640px] bg-[var(--accent)]/[0.07] blur-[180px] -top-40 -right-20 pointer-events-none" />
        </div>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
