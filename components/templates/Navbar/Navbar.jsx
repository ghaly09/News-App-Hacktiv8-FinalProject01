import Logo from "@/assets/images/Logo.png";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// const NAV_LIST = [
//   { text: "Home", href: "/" },
//   { text: "Programming", href: "/programming" },
//   { text: "Covid-19", href: "/covid" },
// ];

export const Navbar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handle = (event) => {
    if (event.key === "Enter") {
      router.push(`/${value.toLowerCase()}`);
      // console.log("Enter key was pressed");
    }
  };

  return (
    <nav
      className={`flex items-center max-w-[1000px] backdrop-blur-xl gap-[60px] ${poppins.className}`}
    >
      <Link href={"/"}>
        <Image src={Logo} width={150} height={100} alt="Logo_BEKER" />
      </Link>
      {/* <div>
        {NAV_LIST.map((menu, id) => {
          const isActive = pathname.includes(menu.href[1]);

          return (
            <Link
              className={`font-semibold hover:text-blue-500 hover:border-b-4 hover:border-blue-400 px-3 py-4 ${
                isActive ? "ActiveNav" : ""
              }`}
              href={menu.href}
              key={id}
            >
              {menu.text}
            </Link>
          );
        })}
      </div> */}
      <div>
        <Link
          className={`font-semibold hover:text-blue-500 hover:border-b-4 hover:border-blue-400 px-3 py-4 
          ActiveNav`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`font-semibold hover:text-blue-500 hover:border-b-4 hover:border-blue-400 px-3 py-4 
          ActiveNav`}
          href={"/programming"}
        >
          Programming
        </Link>
        <Link
          className={`font-semibold hover:text-blue-500 hover:border-b-4 hover:border-blue-400 px-3 py-4 
          ActiveNav`}
          href={"/covid-19"}
        >
          Covid-19
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <div className="border-2 py-1 px-2 rounded-full bg-white ">
          <i className="fas fa-search relative" aria-hidden="true"></i>
          <input
            className="py-1 px-2 focus:outline-none relative"
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            onKeyPress={(event) => {
              handle(event, value);
            }}
          />
        </div>
        <Link href={"/favorite"}>
          <button className="flex items-center gap-1 font-bold mx-4 p-2 border-2 rounded-full text-white bg-blue-500 hover:bg-red-600 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-100">
            <i className="fas fa-heart " aria-hidden="true"></i>
            <p>Favorites</p>
          </button>
        </Link>
        <Link href={"/"}>
          <i className="far fa-user-circle text-3xl" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};
