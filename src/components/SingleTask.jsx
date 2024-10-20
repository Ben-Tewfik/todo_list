import { collection, deleteDoc, doc } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
import { db } from "../../utils/firebase-config";

export default function SingleTask({ task, id }) {
  // function to delete the elment from firebase
  async function deleteTask(id) {
    const docRef = doc(db, "todos", id);
    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-gray500 border capitalize border-gray400 rounded-lg p-4 text-[14px] text-gray100 leading-[140%] flex items-start gap-4">
      <input
        type="checkbox"
        className="peer cursor-pointer shrink-0 w-[17.45px] h-[17.45px] rounded-full appearance-none border border-blue hover:border-darkblue hover:bg-purple hover:opacity-20 checked:bg-darkPurple checked:border-darkPurple hover:checked:bg-purple hover:checked:border-purple hover:checked:opacity-100 flex items-center justify-center checked:after:content-['✔'] checked:after:w-[7.31px] checked:after:h-[4.69px] relative checked:after:absolute checked:after:bottom-3 checked:after:left-[2px] transition-all duration-300"
      />
      <p className="grow peer-checked:line-through peer-checked:text-gray300 transition-all duration-300">
        {task}
      </p>

      <div
        onClick={() => deleteTask(id)}
        className="shrink-0 h-6 w-6 bg-gray500 flex justify-center items-center text-gray300 hover:text-danger hover:bg-gray400 rounded-[4px] cursor-pointer transition-all duration-300"
      >
        <FaRegTrashAlt className=" h-[14px] w-[12.48px]" />
      </div>
    </div>
  );
}
