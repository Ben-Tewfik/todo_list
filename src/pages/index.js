import { Inter } from "next/font/google";
import { FiPlusCircle } from "react-icons/fi";
import logo from "../../public/logo.svg";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <section className={`${inter.className} bg-gray600`}>
      {/* title */}
      <div className="bg-gray700 h-[200px] flex justify-center items-center">
        <h1 className="text-darkPurple text-center text-[40px] font-black flex justify-center items-center">
          <Image src={logo} alt="Todo App Logo" width={22} height={36} />
          <span className="text-blue ml-3">to</span>do
        </h1>
      </div>
      {/* list */}
      <div
        className="w-[90vw] max-w-[736px] mx-auto relative"
        style={{ height: "calc(100vh - 200px)" }}
      >
        {/* form */}
        <form className="absolute left-1/2 -translate-x-1/2 -top-7 w-full flex justify-center items-center gap-3">
          <input
            type="text"
            placeHolder="add a new task"
            className="bg-gray500 h-[54px] p-3 text-gray300 grow capitalize border border-gray700"
          />
          <button className="bg-darkblue h-[54px] text-white px-3 basis-[90px] text-[14px] flex justify-center items-center gap-1 focus-visible:outline-none">
            create
            <FiPlusCircle />
          </button>
        </form>
      </div>
    </section>
  );
}
