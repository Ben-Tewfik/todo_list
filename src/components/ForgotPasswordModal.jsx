import { useGlobalContext } from "@/Context/AppContext";
import { FaTimes } from "react-icons/fa";

export default function ForgotPasswordModal() {
  const { closeForgotPasswordModal, toggleModal } = useGlobalContext();

  return (
    <section
      className={`bg-gray600 border-2 border-gray500 fixed h-80 top-1/2 left-0 right-0 -translate-y-1/2 w-[90%] mx-auto rounded-xl ${
        toggleModal ? "hidden" : "flex"
      }`}
    >
      <button
        onClick={closeForgotPasswordModal}
        className="absolute right-5 top-5 cursor-pointer text-darkblue hover:text-blue transition-all duration-300"
      >
        <FaTimes size={30} />
      </button>
      <form
        onSubmit={e => e.preventDefault()}
        className="w-full flex justify-center flex-col items-center gap-7 p-10 max-w-96 mx-auto"
      >
        <input
          type="password"
          placeholder="Enter New Password"
          className="bg-gray500 h-[54px] p-3 w-full text-gray300 border border-gray700 rounded-lg focus-visible:outline-none focus:border-darkPurple focus:text-gray100"
        />

        <button
          className={`bg-darkblue w-full p-3 text-white text-[14px] capitalize rounded-lg hover:bg-blue transition-all duration-300 
          }`}
        >
          reset password
        </button>
      </form>
    </section>
  );
}
