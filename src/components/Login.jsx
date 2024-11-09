import { Inter } from "next/font/google";
import TodoLogo from "./TodoLogo";
import { useGlobalContext } from "@/Context/AppContext";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Login() {
  const { openForgotPasswordModal } = useGlobalContext();
  return (
    <section className={`${inter.className}`}>
      <TodoLogo />
      <form
        onSubmit={e => e.preventDefault()}
        className="w-full flex justify-center flex-col items-center gap-4 p-10 max-w-96 mx-auto"
      >
        <input
          type="email"
          placeholder="email"
          className="bg-gray500 h-[54px] w-full p-3 text-gray300 capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray500 h-[54px] p-3 w-full text-gray300 capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <button
          onClick={openForgotPasswordModal}
          className="text-darkblue capitalize hover:text-blue transition-all duration-300 self-end text-[14px] cursor-pointer"
        >
          forgot password?
        </button>
        <button className="bg-darkblue w-full mt-5 p-3 text-white text-[14px] capitalize rounded-lg hover:bg-blue transition-all duration-300">
          login
        </button>
        <p className="text-gray100 capitalize mt-5">
          don&apos;t have an account?
          <Link
            href={"/signup"}
            className="text-darkblue hover:text-blue transition-all duration-300"
          >
            {" "}
            sign up
          </Link>
        </p>
      </form>
    </section>
  );
}
