import Header from "@/components/custom/header";
import { Metadata } from "next";
import MBackground from "./(main)/(components)/main-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFTERLAND",
  description: "AFTERLAND",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className="overflow-hidden"
      >
        <MBackground />
        <div className="flex flex-col px-2.5 md:px-5 2xl:px-10 py-3 md:py-5 2xl:py-10 min-h-dvh h-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
