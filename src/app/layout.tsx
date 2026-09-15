import type { Metadata } from "next";
import { Bebas_Neue, Figtree } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Albion Fish Bar · Rotherhithe SE16",
  description:
    "Proper fish & chips on Albion Street, Rotherhithe. Call 020 7237 2123 for collection.",
  openGraph: {
    title: "Albion Fish Bar · Rotherhithe SE16",
    description:
      "Proper fish & chips on Albion Street. Fresh from the fryer — call ahead for collection.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
