import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Programming() {
  return (
    <main className={` text-center m-96 ${poppins.className}`}>
      <h1 className="font-bold text-3xl">Programming</h1>
    </main>
  );
}
