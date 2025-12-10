import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const WellServicesIndex= () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default WellServicesIndex;
