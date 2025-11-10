import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/components/navbar";
import Footer from "@/components/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/convex-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Ship Sure",
  description: "Ship sure ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* <NavBar /> */}
            {children}
            {/* <Footer /> */}
          </body>
        </html>
      </ClerkProvider>
    </ConvexClientProvider>
  );
}
