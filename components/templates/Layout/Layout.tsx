import React, { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

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
      <Footer />
    </main>
  );
};
