import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import {ThemeProvider} from "@/components/ui/theme-provider";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const urbanist1 = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeslaTech",
  description: "yameteeeee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${urbanist.variable} ${urbanist1.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >

        <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
