// import Wrapper from "@/components/templates/wrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Leo Portfolio • Frontend Developer",
  openGraph: {
    title: "Leo Portfolio",
    description: "Leo Portfolio • Frontend Developer",
    type: "website",
    images: [
      "https://raw.githubusercontent.com/annminn104/muithew-monorepos/master/apps/portfolio/public/thumbnail.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body className="noScroll">
        {children}
        {/* <RootProvider><Wrapper>{children}</Wrapper></RootProvider> */}
      </body>
    </html>
  );
}
