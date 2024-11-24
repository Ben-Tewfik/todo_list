import { AppProvider } from "@/Context/AppContext";
import "@/styles/globals.css";
import { Bounce, Flip, Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
      <ToastContainer position="top-center" transition={Zoom} />
    </AppProvider>
  );
}
