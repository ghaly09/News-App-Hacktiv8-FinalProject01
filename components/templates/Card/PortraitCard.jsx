import Image from "next/image";
import { TextCard } from "@/components/molecules/TextCard";
import Link from "next/link";

export const PortraitCard = ({
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
  const src = `${
    urlToImage ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
    <section className="container w-auto hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg shadow-sm">
      <div className="border-solid border-2 border-black-600 min-h-[421.5px] w-[350px] lg:max-h-[575px] lg:max-w-[320px] rounded-lg hover:shadow-lg shadow-sm">
        <div className="flex flex-col">
          <Link href={url ?? "/"} target="_blank" rel="noreferrer noopener">
            <Image
              className=" object-fill max-w-full h-[160px] rounded-t-lg"
              loader={() => src}
              src={src}
              width={500}
              height={500}
              priority={true}
              alt="card-picture"
            />
          </Link>
          <TextCard
            id={id}
            sourceName={sourceName}
            title={title}
            description={description}
            author={author}
            publishedAt={publishedAt}
            urlToImage={urlToImage}
            url={url}
            saved={saved}
          />
        </div>
      </div>
    </section>
  );
};
