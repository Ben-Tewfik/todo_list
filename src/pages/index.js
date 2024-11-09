import Todos from "@/components/Todos";
import { useGlobalContext } from "@/Context/AppContext";
import { useRouter } from "next/router";

export default function Home() {
  const { currentUser } = useGlobalContext();
  const router = useRouter();
  if (!currentUser) {
    router.push("/login");
  }
  return <Todos />;
}
