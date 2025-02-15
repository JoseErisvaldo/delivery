import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Geist } from "next/font/google";
import { getSession } from "@/utils/supabase/getSession";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();
  console.log(session);
  
  return (
    <html lang="pt-BR" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <div className="flex-1 w-full flex flex-col gap-20">
              {session && (
                <nav className="w-full flex border-b border-b-foreground/10 h-16">
                  <div className="w-full flex justify-between p-3 px-5 text-sm">
                    <HeaderAuth />
                  </div>
                </nav>
              )}
              <div className={`flex ${session ? "h-[calc(100vh-265px)]" : ""}`}>
                <div className="p-2 flex flex-col gap-2 border-r">
                  {session && (
                    <SideBar />
                  )}
                </div>
                <div className={`scrollbar-none w-full flex flex-col gap-20 ${session ? "overflow-x-scroll p-5 " : ""}`}>
                  {children}
                </div>
              </div>
              {session && (
                <footer className="w-full flex border-t mx-auto text-center text-xs gap-8 py-3">
                  <p className="text-foreground px-5">
                    Desenvolvido por: Jose Erisvaldo
                  </p>
                </footer>
              )}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
