import Image from "next/image";
import logo from "../../public/logo.svg";
export default function TodoLogo() {
  return (
    <div className="bg-gray700 h-[200px] flex justify-center items-center">
      <h1 className="text-darkPurple text-center text-[40px] font-black flex justify-center items-center">
        <Image src={logo} alt="Todo App Logo" width={22} height={36} />
        <span className="text-blue ml-3">to</span>do
      </h1>
    </div>
  );
}
