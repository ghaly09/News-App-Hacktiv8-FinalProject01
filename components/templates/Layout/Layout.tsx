import React, { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LandscapeCards } from "../Cards/LandscapeCards";
import { PortraitCards } from "../Cards/PortraitCards";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1000px]">
        <div>{children}</div>
      </div>
      <LandscapeCards />
      <PortraitCards />
      <Footer />
    </main>
  );
};
