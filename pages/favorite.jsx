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

  let arrayFavorite = Object.keys(stateFavorite);

  console.log(stateFavorite);
  return (
    <main className={`${poppins.className}`}>
      <div className="flex flex-col lg:flex-row items-center lg:gap-80 pt-8 lg:pt-0">
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
      <div className="flex flex-col md:flex-row gap-5 items-center sm:justify-center flex-wrap">
        {arrayFavorite.map((id, index) => (
          <div>
            {
              <PortraitCard
                key={index}
                id={stateFavorite[id].title}
                saved={stateFavorite[id].saved}
                urlToImage={stateFavorite[id].urlToImage}
                url={stateFavorite[id].url}
                sourceName={stateFavorite[id].sourceName}
                title={stateFavorite[id].title}
                description={stateFavorite[id].description}
                author={stateFavorite[id].author}
                publishedAt={stateFavorite[id].publishedAt}
              />
            }
          </div>
        ))}
      </div>
    </main>
  );
}
