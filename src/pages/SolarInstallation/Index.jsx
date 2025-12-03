import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const SolarInstallationIndex= () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default SolarInstallationIndex;
