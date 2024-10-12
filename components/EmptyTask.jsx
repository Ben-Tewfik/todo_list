import Image from "next/image";
import clipboard from "../public/clipboard.svg";

export default function EmptyTask() {
  return (
    <section className="border-t border-t-gray400 rounded-lg flex justify-center items-center flex-col gap-6 text-gray300 h-[244px]">
      <Image src={clipboard} alt="clipboard" />
      <p className="leading-[140%] text-center max-w-[350px]">
        You don&apos;t have any tasks registered yet Create tasks and organize
        your to-do items
      </p>
    </section>
  );
}
