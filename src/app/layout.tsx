import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Career Platform",
    description: "AI Career Guidance Platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kk" className={inter.variable}>
            <body className="antialiased font-sans bg-background text-foreground">
                {children}
            </body>
        </html>
    );
}
