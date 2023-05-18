"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ButtonTrend } from "@/components/atoms/Trend-button";
import homeImage from "@/assets/images/home.gif";
import loadingImage from "@/assets/images/loading.gif";
import { useSelector, useDispatch } from "react-redux";
import { getDataIndonesia } from "@/config/redux/reducers/globalStore";
import { PortraitCard } from "@/components/templates/Card/PortraitCard";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const stateGlobal = useSelector((state) => {
    if (
      state.storeGlobal.dataIndonesia !== "kosong" &&
      state.storeGlobal.dataIndonesia !== undefined
    ) {
      return state.storeGlobal.dataIndonesia;
    }
  });

  const stateIsLoading = useSelector((state) => state.storeGlobal.isLoading);

  const dispatch = useDispatch();

  // Panggil dataIndonesia
  useEffect(() => {
    dispatch(getDataIndonesia());
  }, [dispatch]);

  // console.log("state indonesia: ", stateGlobal && stateGlobal);

  return (
    <main className={`${poppins.className}`}>
      <div className="flex flex-col lg:flex-row items-center lg:gap-80 pt-8 lg:pt-0">
        <span className=" max-w-md">
          <h1 className="font-bold text-4xl pb-2">Indonesia News</h1>
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
      {/* isLoading */}
      {stateIsLoading == true ? (
        <div className="flex justify-center">
          <Image
            className=" text-center"
            src={loadingImage}
            width={300}
            height={300}
            alt="loading"
            priority={true}
          />
        </div>
      ) : (
        // CARDS
        <div className="flex flex-col md:flex-row gap-5 items-center sm:justify-center flex-wrap">
          {stateGlobal !== "kosong" && stateGlobal !== undefined
            ? stateGlobal.map((dataValue, id) => (
                <div>
                  {
                    <PortraitCard
                      key={id}
                      id={dataValue.title}
                      urlToImage={dataValue.urlToImage}
                      url={dataValue.url}
                      sourceName={dataValue.source.name}
                      title={dataValue.title}
                      description={dataValue.description}
                      author={dataValue.author}
                      publishedAt={dataValue.publishedAt}
                    />
                  }
                </div>
              ))
            : ""}
        </div>
      )}
    </main>
  );
}

// export async function getServerSideProps() {
//   const dispatch = useDispatch();
//   dispatch(getDataIndonesia());
//   const stateGlobal = useSelector((state) => {
//     if (
//       state.storeGlobal.dataIndonesia !== "kosong" &&
//       state.storeGlobal.dataIndonesia !== undefined
//     ) {
//       return state.storeGlobal.dataIndonesia;
//     }
//   });

//   return {
//     props: { stateGlobal }, // will be passed to the page component as props
//   };
// }
