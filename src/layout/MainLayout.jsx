import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "../../context/context";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ContextProvider>
        <main className="main-box">
          <Outlet />
        </main>
      </ContextProvider>
      <Footer />
    </>
  );
}
