import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProfileIndex = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default ProfileIndex;
