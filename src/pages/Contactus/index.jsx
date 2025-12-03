import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ContactusIndex = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default ContactusIndex;
