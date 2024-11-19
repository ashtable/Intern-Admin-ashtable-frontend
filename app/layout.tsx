import "@/app/globals.css"

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils"

import { CSPostHogProvider } from "./providers";

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "AI Configuration",
  description: "Configure Your Team's AI!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body 
          className={cn(
            'antialiased',
            fontHeading.variable,
            fontBody.variable
          )}
        >
          {children}
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
