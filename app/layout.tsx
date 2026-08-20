import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jayden-portfolio-snowy.vercel.app/"),

  title: {
    default: "Jayden Lao | Software Engineer",
    template: "%s | Jayden Lao",
  },
  description:
    "Software engineer based in Melbourne specialising in full-stack web development with Java, Spring Boot, React and TypeScript.",
  authors: [
    {
      name: "Jayden Lao",
    },
  ],
  creator: "Jayden Lao",
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: "Jayden Lao | Software Engineer",
    description:
      "Software engineer building thoughtful, reliable and user-friendly web applications.",
    siteName: "Jayden Lao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Lao | Software Engineer",
    description:
      "Software engineer building thoughtful, reliable and user-friendly web applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>   
      </body>
    </html>
  );
}
