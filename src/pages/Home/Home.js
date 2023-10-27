import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import Navigator from "../../components/Navigator/Navigator";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Navigator />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
