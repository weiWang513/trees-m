import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trees",
  description: "Trees Protocol Powered by Solana Seed Inscription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `import('/amfe-flexible.js').then(() => {})`,
          }}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
