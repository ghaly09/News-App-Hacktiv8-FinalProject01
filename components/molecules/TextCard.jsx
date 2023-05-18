import {
  REMOVE_FAVORITE,
  UPDATE_FAVORITE,
} from "@/config/redux/reducers/favoriteStore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TextCard = ({
  urlToImage,
  url,
  sourceName,
  title,
  description,
  author,
  publishedAt,
  id,
  saved,
}) => {
  const [love, setLove] = useState("fa-regular fa-heart");
  const stateFavorite = useSelector((state) => state.storeFavorite.favorites);

  let arraySaved = Object.keys(stateFavorite);
  let hasSaved = arraySaved.includes(id);

  const dispatch = useDispatch();

  // console.log("data favorite uy: ", hasSaved);

  const handleButtonLove = () => {
    if (love == "fa-regular fa-heart" && !saved) {
      setLove(`fas fa-heart text-red-500`);
      // Save to Favorite
      dispatch(
        UPDATE_FAVORITE({
          id: id,
          urlToImage: urlToImage,
          url: url,
          sourceName: sourceName,
          author: author,
          title: title,
          description: description,
          publishedAt,
          saved: love,
        })
      );

      // console.log("favorites: ", favoriteSaved);
    } else if (
      love == `fas fa-heart text-red-500` ||
      saved == "fas fa-heart text-red-500"
    ) {
      setLove("fa-regular fa-heart");
      // Detele Saved Favorite
      dispatch(
        REMOVE_FAVORITE({
          id: id,
          urlToImage: urlToImage,
          url: url,
          sourceName: sourceName,
          author: author,
          title: title,
          description: description,
          publishedAt,
          saved: love,
        })
      );
    }
  };

  let publishDate = new Date(publishedAt);

  let date = publishDate.toDateString();
  //   console.log(publishDate);

  return (
    <div className="p-2">
      <p className="text-xs font-semibold leading-[14px] text-[#4F4F4F] mb-[11px]">
        {sourceName}
      </p>
      <h1
        className="line-clamp-3 text-base font-semibold leading-[22px] text-[#000000] mb-[14px] min-h-[66px]"
        title={
          title ??
          "Title have not written yet, please click this card for more details!"
        }
      >
        {title ??
          "Title have not written yet, please click this card for more details!"}
      </h1>
      <p
        className="line-clamp-4 text-[13px] hyphens-auto font-[350px] leading-[20px] text-[#111111] mb-[14px] min-h-[80px]"
        title={
          description ??
          "Description have not written yet, please click this card for more details!"
        }
      >
        {description ??
          "Description have not written yet, please click this card for more details!"}
      </p>
      <div className="flex items-center max-w-full">
        <i className="fa-solid fa-circle-user text-[28px] text-slate-400 rounded-full mr-2"></i>
        <div className="flex flex-col font-semibold leading-[14px] mr-[.5em]">
          <p className="truncate text-[#4F4F4F] text-xs max-w-[15em]">
            {author ?? "Anonymous"}
          </p>
          <p className="truncate text-[#828282] text-[10px] max-w-[15em]">
            {date ?? "Time Flies"} &bull; 10 min read
          </p>
        </div>
        <span className="w-full text-end ">
          <i
            className={`${
              saved || hasSaved == true ? "fas fa-heart text-red-500" : love
            } text-2xl cursor-pointer hover:scale-125 active:scale-[0.9] hover:duration-200 p-1`}
            aria-hidden="true"
            onClick={handleButtonLove}
          ></i>
        </span>
      </div>
    </div>
  );
};
