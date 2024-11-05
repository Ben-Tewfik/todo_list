import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../../utils/firebase-config";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [toggleModal, setToggleModal] = useState(true);

  // function for opening the forgot password modal
  function openForgotPasswordModal() {
    setToggleModal(false);
  }
  //   function for closing the forgot password modal
  function closeForgotPasswordModal() {
    setToggleModal(true);
  }

  // function for user to signUp
  async function signup(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // add tostify later
      console.log(error);
    }
  }
  // function for the user to signout
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AppContext.Provider
      value={{
        closeForgotPasswordModal,
        openForgotPasswordModal,
        toggleModal,
        signup,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
