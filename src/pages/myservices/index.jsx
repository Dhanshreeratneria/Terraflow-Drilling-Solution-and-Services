import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MyserciesIndex = () => (
  <div>
    <Header />
    <Outlet />

    <Footer />
  </div>
);

export default MyserciesIndex;
