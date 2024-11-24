import { Inter } from "next/font/google";
import { FiPlusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import EmptyTask from "./EmptyTask";
import Tasks from "./Tasks";
import TodoLogo from "./TodoLogo";
import { IoIosLogOut } from "react-icons/io";
import { useGlobalContext } from "@/Context/AppContext";
import { BeatLoader } from "react-spinners";
const inter = Inter({ subsets: ["latin"] });

export default function Todos() {
  const { logout, currentUser } = useGlobalContext();

  // state for adding task to firebae
  const [task, setTask] = useState("");
  // state for fetching tasks from firebase
  const [tasks, setTasks] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);
  // create todos and add them to firebase
  async function createTodo() {
    try {
      await addDoc(collection(db, "todos"), {
        task,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        taskStatus: false,
      });
      toast.success("Task added");
      setTask("");
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  useEffect(() => {
    if (!currentUser) return;
    try {
      // query
      const q = query(
        collection(db, "todos"),
        where("userId", "==", currentUser?.uid),
        orderBy("createdAt")
      );
      const unsubscribe = onSnapshot(q, snapshot => {
        const todos = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        setTasks(todos);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      toast.error(`${error}`);
      setLoading(false);
    }
  }, [currentUser]);
  // create array for to count completed tasks
  const filteredTasks = tasks.filter(task => task.taskStatus === true);
  return (
    <section className={`${inter.className}`}>
      {/* title and logo */}
      <TodoLogo />
      {/* todo list */}
      <div
        className="w-[90vw] max-w-[736px] mx-auto relative"
        style={{ height: "calc(100vh - 200px)" }}
      >
        {/* form */}
        <form
          onSubmit={e => e.preventDefault()}
          className="absolute left-1/2 -translate-x-1/2 -top-7 w-full flex justify-center items-center gap-3"
        >
          <input
            type="text"
            placeholder="Add a New Task"
            className="bg-gray500 h-[54px] p-3 text-gray300 grow border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            className="bg-darkblue h-[52px] text-white px-3 basis-[90px] text-[14px] flex justify-center items-center gap-1 capitalize rounded-lg hover:bg-blue transition-all duration-300"
            onClick={createTodo}
          >
            create
            <FiPlusCircle className="w-4 h-4" />
          </button>
        </form>
        {/* informations about tasks */}
        <div className="pt-20 px-1 mb-6 flex justify-between capitalize text-[14px] text-gray200 font-bold">
          <div className="flex items-center gap-3">
            <h3 className="text-blue">tasks created</h3>
            <span className="bg-gray400 text-[12px] px-2 rounded-full flex justify-center items-center">
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-purple">completed</h3>
            <span className="bg-gray400 text-[12px] px-2 rounded-full flex flex-col justify-center items-center">
              {filteredTasks.length === 0
                ? "0"
                : `${filteredTasks.length} of ${tasks.length}`}
            </span>
          </div>
        </div>
        {loading ? (
          <BeatLoader
            color="#4ea8de"
            cssOverride={{
              textAlign: "center",
              marginTop: "100px",
            }}
          />
        ) : tasks.length < 1 ? (
          <EmptyTask />
        ) : (
          <Tasks todos={tasks} />
        )}
      </div>
      {currentUser ? (
        <button
          onClick={logout}
          className="bg-darkblue h-[52px] text-white px-3 basis-[90px] text-[14px] flex justify-center items-center gap-1 capitalize rounded-lg hover:bg-blue transition-all duration-300 fixed bottom-3 right-5"
        >
          logout
          <IoIosLogOut className="w-4 h-4" />
        </button>
      ) : null}
    </section>
  );
}
