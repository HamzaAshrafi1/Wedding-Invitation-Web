import type { Metadata } from "next";
import "./globals.css";

// The original Amiri, Cormorant Garamond and Jost files are self-hosted in /fonts.
export const metadata: Metadata = {
  title: "Ayaan & Alina — Wedding Invitation",
  description: "Join the wedding celebrations of Ayaan Ashrafi and Alina Belim, 8–10 December 2026, Ratlam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
