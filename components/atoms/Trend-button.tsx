import React, { ReactNode } from "react";

interface LayoutProps {
  icon: ReactNode;
  trendingText: ReactNode;
}

export const ButtonTrend = (props: LayoutProps) => {
  const { icon, trendingText } = props;
  return (
    <button className="flex items-center gap-1 font-semibold p-2 ml-1 border-2 rounded-full bg-slate-100 hover:bg-slate-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-100">
      <i className={`${icon}`} aria-hidden="true"></i>
      <p className="text-slate-800">{trendingText}</p>
    </button>
  );
};
