import { RxRocket } from "react-icons/rx";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <section className={inter.className}>
      {/* title */}
      <div className="bg-gray700 h-[20vh] flex justify-center items-center">
        <h1 className="text-darkPurple text-center text-2xl font-bold flex justify-center items-center">
          <RxRocket className="text-blue" />
          <span className="text-blue ml-2">to</span>do
        </h1>
      </div>
    </section>
  );
}
