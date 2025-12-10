import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PumpInstallationIndex= () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default PumpInstallationIndex;
