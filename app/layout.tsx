import Header from "@/components/custom/header";
import { Metadata } from "next";
import MBackground from "./(main)/(components)/main-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afterland, play-to-earn experience set in a post-apocalyptic world.",
  description:
    "Improve your shelter, discover new plants and evolve with other survivors!",
  twitter: {
    title:
      "Afterland, play-to-earn experience set in a post-apocalyptic world.",
    card: "summary_large_image",
    images: "/metatag.png",
    description:
      "Improve your shelter, discover new plants and evolve with other survivors!",
  },
  keywords: ["TON", "AFTHERLAND", "Play-To-earn"],
  openGraph: {
    type: "website",
    title:
      "Afterland, play-to-earn experience set in a post-apocalyptic world.",
    description:
      "Improve your shelter, discover new plants and evolve with other survivors!",
    url: "/metatag.png",
  },
  appleWebApp: {
    title:
      "Afterland, play-to-earn experience set in a post-apocalyptic world.",
    statusBarStyle: "black-translucent",
  },
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
