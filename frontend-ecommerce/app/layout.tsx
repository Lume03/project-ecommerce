import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import {Toaster} from "sonner";

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
            <Navbar />
            {children}
            <Toaster/>
            <Footer />
        </ThemeProvider>

        <Script
            id="chatbase-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              (function(){
                if(!window.chatbase || window.chatbase("getState") !== "initialized") {
                  window.chatbase = function(...args) {
                    if (!window.chatbase.q) window.chatbase.q = [];
                    window.chatbase.q.push(args);
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                      if (prop === "q") return target.q;
                      return (...args) => target(prop, ...args);
                    }
                  });
                }
                const onLoad = () => {
                  const script = document.createElement("script");
                  script.src = "https://www.chatbase.co/embed.min.js";
                  script.id = "IEW0NXe1CwNDi5LucbLPj";
                  script.domain = "www.chatbase.co";
                  document.body.appendChild(script);
                };
                document.readyState === "complete" ? onLoad() : window.addEventListener("load", onLoad);
              })();
            `,
            }}
        />
        </body>
        </html>
    );
}