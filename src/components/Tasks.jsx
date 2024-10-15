import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase-config";
import SingleTask from "./SingleTask";
import { Task } from "./Task";

export default function Tasks() {
  const todoRef = collection(db, "todos");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodo() {
      let todoArr = [];
      const todo = await getDocs(todoRef);
      todo.docs.forEach(doc => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    }
    fetchTodo();
  }, []);
  return (
    <section>
      {todos.map(todo => {
        return <Task key={todo.id} {...todo} />;
      })}
    </section>
  );
}
