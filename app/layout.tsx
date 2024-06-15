import { Toaster } from "sonner"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import { ConvexClientProvider } from "@/components/ui/providers/convex-provider";
import { ModalProvider } from "@/components/ui/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JotDown",
  description: "The connected workspace where better, faster work happens.",

  icons: {
    icon: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/icons8-sticky-notes.svg",
      href: "/icons8-sticky-notes.svg"
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/icons8-sticky-notes.svg",
      href: "/icons8-sticky-notes.svg"
    }
  ]
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="jotdown-theme-2">
          <Toaster position="bottom-center"/>
          <ModalProvider />
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
