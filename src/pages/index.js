import Todos from "@/components/Todos";
import { useGlobalContext } from "@/Context/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { currentUser, loading } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser && !loading) {
      router.push("/login");
    }
  }, [currentUser, loading, router]);

  return <Todos />;
}
