import { createContext, useContext, useState } from "react";

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
  return (
    <AppContext.Provider
      value={{ closeForgotPasswordModal, openForgotPasswordModal, toggleModal }}
    >
      {children}
    </AppContext.Provider>
  );
}
