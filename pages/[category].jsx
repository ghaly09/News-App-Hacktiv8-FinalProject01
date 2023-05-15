"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import loadingImage from "@/assets/images/loading.gif";
import { Poppins } from "next/font/google";
import { ButtonTrend } from "@/components/atoms/Trend-button";
import { useSelector, useDispatch } from "react-redux";
import { PortraitCard } from "@/components/templates/Card/PortraitCard";
import { getDataCategory } from "@/config/redux/reducers/categoryStore";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  // Data from GLobal Store
  const stateCategory = useSelector((state) => {
    if (
      state.storeCategory.dataCategory !== "kosong" &&
      state.storeCategory.dataCategory !== undefined
    ) {
      return state.storeCategory.dataCategory;
    }
  });

  const stateIsLoading = useSelector((state) => state.storeCategory.isLoading);

  const dispatch = useDispatch();

  // Panggil dataCategory
  useEffect(() => {
    // dispatch(getDataCategory());
    dispatch(getDataCategory(category == "covid-19" ? "covid" : category));
  }, [category]);

  // console.log("state category: ", stateCategory);
  console.log("stateIsLoading: ", stateIsLoading);

  return (
    <section className={`${poppins.className}`}>
      <div className="flex flex-col lg:flex-row items-center lg:gap-80 pt-8 lg:pt-0">
        <span className=" max-w-md">
          <h1 className="capitalize font-bold text-4xl pb-2">
            {category} News
          </h1>
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
          src="https://www.kaggle.com/static/images/models/landing_page_header_illustration_light.svg"
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
        //  CARDS
        <div className="flex flex-col md:flex-row gap-5 items-center sm:justify-center flex-wrap">
          {stateCategory !== "kosong" && stateCategory !== undefined
            ? stateCategory.map((dataValue, id) => (
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
    </section>
  );
}
