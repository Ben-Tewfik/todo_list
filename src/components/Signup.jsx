import TodoLogo from "./TodoLogo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Signup() {
  return (
    <section className={`${inter.className}`}>
      <TodoLogo />
      <form
        onSubmit={e => e.preventDefault()}
        className="w-full flex justify-center flex-col items-center gap-4 p-10 max-w-96 mx-auto"
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-gray500 h-[54px] w-full p-3 text-gray300 capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray500 h-[54px] w-full p-3 text-gray300 capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray500 h-[54px] p-3 w-full text-gray300 capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />

        <button className="bg-darkblue w-full mt-5 p-3 text-white text-[14px] capitalize rounded-lg hover:bg-blue transition-all duration-300">
          Signup
        </button>
      </form>
    </section>
  );
}