import Header from "@/components/custom/header";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumia",
  description: "Lumia",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={font.className}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <div className="flex flex-col container body-container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
