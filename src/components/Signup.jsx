import { useGlobalContext } from "@/Context/AppContext";
import TodoLogo from "./TodoLogo";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Signup() {
  const { signup } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          className="bg-gray500 h-[54px] w-full p-3 text-gray300 border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-gray500 h-[54px] w-full p-3 text-gray300  border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="bg-gray500 h-[54px] p-3 w-full text-gray300  border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />

        <button
          onClick={() => signup(email, password)}
          type="submit"
          className="bg-darkblue w-full mt-5 p-3 text-white text-[14px] capitalize rounded-lg hover:bg-blue transition-all duration-300"
        >
          Signup
        </button>
        <p className="text-gray100 capitalize mt-5">
          have an account?
          <Link
            href={"/login"}
            className="text-darkblue hover:text-blue transition-all duration-300"
          >
            {" "}
            sign in
          </Link>
        </p>
      </form>
    </section>
  );
}
