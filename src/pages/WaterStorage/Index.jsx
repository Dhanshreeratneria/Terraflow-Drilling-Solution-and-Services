import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const WaterStorageIndex= () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default WaterStorageIndex;
