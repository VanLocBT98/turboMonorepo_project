// import Wrapper from "@/components/templates/wrapper";

import Wrapper from "@/components/templates/Wrapper";
import type { Metadata } from "next";
import RootProvider from "./provider";

export const metadata: Metadata = {
  title: "Leo Portfolio",
  description: "Leo Portfolio • Frontend Developer",
  openGraph: {
    title: "Leo Portfolio",
    description: "Leo Portfolio • Frontend Developer",
    type: "website",
    images: [""],
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
        <RootProvider>
          <Wrapper>{children}</Wrapper>
        </RootProvider>
      </body>
    </html>
  );
}
