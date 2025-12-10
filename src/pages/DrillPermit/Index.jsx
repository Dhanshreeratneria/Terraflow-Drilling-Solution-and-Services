import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DrillPermitIndex = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default DrillPermitIndex;
