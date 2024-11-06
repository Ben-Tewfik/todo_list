import { Inter } from "next/font/google";
import { FiPlusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import EmptyTask from "./EmptyTask";
import Tasks from "./Tasks";
import TodoLogo from "./TodoLogo";
import { IoIosLogOut } from "react-icons/io";
import { useGlobalContext } from "@/Context/AppContext";
const inter = Inter({ subsets: ["latin"] });
export default function Todos() {
  const { logout } = useGlobalContext();
  // state for adding task to firebae
  const [task, setTask] = useState("");
  // state for fetching tasks from firebase
  const [tasks, setTasks] = useState([]);
  // create todos and add them to firebase
  async function createTodo() {
    try {
      await addDoc(collection(db, "todos"), { task });
      setTask("");
    } catch (error) {
      // notofication for adding a new task or error later
      console.log(error);
    }
  }
  useEffect(() => {
    async function getTodos() {
      try {
        const unsubscribe = onSnapshot(collection(db, "todos"), snapshot => {
          const todos = snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
          });
          setTasks(todos);
        });
        return () => unsubscribe();
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, []);

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
            placeholder="add a new task"
            className="bg-gray500 h-[54px] p-3 text-gray300 grow capitalize border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
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
            <span className="bg-gray400 text-[12px] w-6 h-5 rounded-full flex justify-center items-center">
              0
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-purple">completed</h3>
            <span className="bg-gray400 text-[12px] w-6 h-5 rounded-full flex justify-center items-center">
              0
            </span>
          </div>
        </div>
        {tasks.length < 1 ? <EmptyTask /> : <Tasks todos={tasks} />}
      </div>
      <button
        onClick={logout}
        className="bg-darkblue h-[52px] text-white px-3 basis-[90px] text-[14px] flex justify-center items-center gap-1 capitalize rounded-lg hover:bg-blue transition-all duration-300 fixed bottom-3 right-5"
      >
        logout
        <IoIosLogOut className="w-4 h-4" />
      </button>
    </section>
  );
}
