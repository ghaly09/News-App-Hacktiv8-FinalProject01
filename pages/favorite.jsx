import Image from "next/image";
import { Poppins } from "next/font/google";
import favoriteImage from "@/assets/images/favorite.gif";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
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
      {/* <Card />*/}
    </main>
  );
}
