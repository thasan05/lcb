import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "LinkedIn Community BD",
  description: "Bangladesh's largest LinkedIn-focused community"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteChrome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
