import "@/styles/globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Nav from "./nav";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denunciá un ñoqui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={playfair.className}>
        <Nav />
        <main className="flex min-h-screen  flex-col  gap-10 p-5 lg:p-10 max-w-6xl mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
