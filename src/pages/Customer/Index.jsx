import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const CustomerPageIndex = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default CustomerPageIndex;
