import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebase-config";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [toggleModal, setToggleModal] = useState(true);
  const [currentUser, setCurrentUser] = useState();

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
  // function for the user to sign In
  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <AppContext.Provider
      value={{
        closeForgotPasswordModal,
        openForgotPasswordModal,
        toggleModal,
        signup,
        logout,
        signIn,
        currentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
