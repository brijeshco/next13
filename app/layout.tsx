import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "OneDev",
  description:
    "AI CodeHub: An AI-driven platform revolutionizing tech Q&A, offering instant, personalized solutions, collaborative learning, and a vibrant community for enthusiasts and developers. Explore tailored learning paths and verified content for enhanced coding expertise.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formPrimaryButton: "primary-gradient",
              footerActionButton:
                "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
