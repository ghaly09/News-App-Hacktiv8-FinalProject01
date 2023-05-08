import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Covid() {
  return (
    <main className={`font-bold text-center ${poppins.className}`}>Covid</main>
  );
}
