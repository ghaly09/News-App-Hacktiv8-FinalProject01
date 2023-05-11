"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ButtonTrend } from "@/components/atoms/Trend-button";
import homeImage from "@/assets/images/home.gif";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_DATA_CATEGORY } from "@/config/redux/reducers/globalStore";
import { PortraitCard } from "@/components/templates/Card/PortraitCard";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const stateGlobal = useSelector((state) => state.storeGlobal);
  const dispatch = useDispatch();

  // console.log("state global: ", dispatch(UPDATE_DATA_CATEGORY("ghaly")));
  console.log("state global: ", stateGlobal);
  return (
    <main className={`${poppins.className}`}>
      <div className="flex flex-col md:flex-row items-center md:gap-80 ">
        <span className=" max-w-md">
          <h1 className="font-bold text-4xl pb-2">{}Indonesia News</h1>
          <p>
            Search and discover hundreds of News, Up to date info and knowing
            the world in one place.
          </p>
          <div>
            <p className="mt-8 font-semibold">Trending Articles</p>
            <span className="flex py-2">
              <ButtonTrend icon="fas fa-chart-line" trendingText="Top" />
              <ButtonTrend icon="fas fa-fire" trendingText="Hot" />
              <ButtonTrend icon="fa-solid fa-rocket" trendingText="New" />
            </span>
          </div>
        </span>
        <Image
          className="py-8 "
          src={homeImage}
          width={300}
          height={280}
          alt="browsing"
          priority={true}
        />
      </div>
      {/* <Card />*/}
      <PortraitCard />
    </main>
  );
}
