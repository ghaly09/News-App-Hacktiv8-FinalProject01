import Image from "next/image";
import { Poppins } from "next/font/google";
import favoriteImage from "@/assets/images/favorite.gif";
import { useSelector } from "react-redux";
import { PortraitCard } from "@/components/templates/Card/PortraitCard";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const stateFavorite = useSelector((state) => state.storeFavorite.favorites);

  console.log(stateFavorite);
  return (
    <main className={`${poppins.className}`}>
      <div className="flex flex-row items-center gap-80 ">
        <span className=" max-w-md">
          <h1 className="font-bold text-4xl pb-2">Your Favorites News</h1>

          <div>
            <p className="mt-8 font-semibold">
              Here what you love and interest
            </p>
          </div>
        </span>
        <Image
          className="py-8 "
          src={favoriteImage}
          width={300}
          height={280}
          alt="browsing"
          priority={true}
        />
      </div>
      {/* CARDS */}
      <div className="flex md:flex-row gap-5 flex-wrap">
        {stateFavorite !== [] && stateFavorite !== undefined
          ? stateFavorite.map((dataFavorite, id) => (
              <div>
                {
                  <PortraitCard
                    key={id}
                    saved={dataFavorite.saved}
                    urlToImage={dataFavorite.urlToImage}
                    url={dataFavorite.url}
                    sourceName={dataFavorite.sourceName}
                    title={dataFavorite.title}
                    description={dataFavorite.description}
                    author={dataFavorite.author}
                    publishedAt={dataFavorite.publishedAt}
                  />
                }
              </div>
            ))
          : ""}
      </div>
    </main>
  );
}
