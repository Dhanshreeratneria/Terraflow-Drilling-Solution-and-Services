import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

// Normal Imports (Non-Lazy)
import DrillingIndex from "./pages/Drilling/Index.jsx";
import Drilling from "./pages/Drilling/Drilling.jsx";

import PumpInstallationIndex from "./pages/PumpInstallation/index.jsx";
import PumpInstallation from "./pages/PumpInstallation/PumpInstallation.jsx";

import WellServicesIndex from "./pages/WellServices/Index.jsx";
import WellServices from "./pages/WellServices/WellServices.jsx";

import SolarInstallationIndex from "./pages/SolarInstallation/Index.jsx";
import SolarInstallation from "./pages/SolarInstallation/SolarInstallation.jsx";

import WaterStorageIndex from "./pages/WaterStorage/Index.jsx";
import WaterStorage from "./pages/WaterStorage/WaterStorage.jsx";

import WellRehabilitationIndex from "./pages/WellRebilitation/Index.jsx";
import WellRehabilitation from "./pages/WellRebilitation/WellRebilitation.jsx";

import DrillPermitIndex from "./pages/DrillPermit/Index.jsx";
import DrillPermit from "./pages/DrillPermit/DrillPermit.jsx";

import WellIndex from "./pages/WellDaignostic/Index.jsx";
import Well from "./pages/WellDaignostic/Well.jsx";

import HoleIndex from "./pages/HoleDownCamera/Index.jsx";
import Hole from "./pages/HoleDownCamera/Hole.jsx";

import PluggingIndex from "./pages/Plugging/Index.jsx";
import Plugging from "./pages/Plugging/Plugging.jsx";

import WindIndex from "./pages/WindTurbine/Index.jsx";
import Wind from "./pages/WindTurbine/Wind.jsx";

import AdminIndex from "./pages/Admin/Index.jsx";
import Admin from "./pages/Admin/Admin.jsx";

import CustomerPage from "./pages/Customer/CustomerPage.jsx";
import CustomerPageIndex from "./pages/Customer/Index.jsx";

import "react-toastify/dist/ReactToastify.css";

const HomeIndex = lazy(() => import("./pages/HomePage/index.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

const MyServicesIndex = lazy(() => import("./pages/myservices/index.jsx"));
const MyServices = lazy(() => import("./pages/myservices/MyService.jsx"));

const ContactIndex = lazy(() => import("./pages/Contactus/index.jsx"));
const Contact = lazy(() => import("./pages/Contactus/Contactus.jsx"));

const ProductIndex = lazy(() =>
  import("./pages/ProductDetailPage copy 2/index.jsx")
);
const Product = lazy(() =>
  import("./pages/ProductDetailPage copy 2/Product.jsx")
);

const AboutUsIndex = lazy(() => import("./pages/AboutUs/index.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));

const ProfileIndex = lazy(() => import("./pages/Profile/index.jsx"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage.jsx"));


const NoMatchFoundPage= lazy(() => import("./pages/nomatch/NoMatchFoundPage.jsx"));

const App = () => {
  const { isAuthenticated } = useAuth();

  // Protected Route
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/signin" replace />;
  };

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home */}
          <Route path="/home" element={<HomeIndex />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* Services */}
          <Route path="/services" element={<MyServicesIndex />}>
            <Route index element={<MyServices />} />
          </Route>

          {/* Contact */}
          <Route path="/contact" element={<ContactIndex />}>
            <Route index element={<Contact />} />
          </Route>

          {/* Products */}
          <Route path="/product" element={<ProductIndex />}>
            <Route index element={<Product />} />
          </Route>

          {/* About Us */}
          <Route path="/aboutus" element={<AboutUsIndex />}>
            <Route index element={<AboutUs />} />
          </Route>

          {/* Drilling */}
          <Route path="/drilling" element={<DrillingIndex />}>
            <Route index element={<Drilling />} />
          </Route>

          {/* Pump Installation */}
          <Route path="/PumpInstallation" element={<PumpInstallationIndex />}>
            <Route index element={<PumpInstallation />} />
          </Route>

          {/* Well Service */}
          <Route path="/well-service" element={<WellServicesIndex />}>
            <Route index element={<WellServices />} />
          </Route>

          {/* Drill Permits */}
          <Route path="/drilling-permits" element={<DrillPermitIndex />}>
            <Route index element={<DrillPermit />} />
          </Route>

          {/* Solar Installation */}
          <Route
            path="/solar-installations"
            element={<SolarInstallationIndex />}
          >
            <Route index element={<SolarInstallation />} />
          </Route>

          {/* Water Storage */}
          <Route path="/WaterStorage" element={<WaterStorageIndex />}>
            <Route index element={<WaterStorage />} />
          </Route>

          {/* Well Rehabilitation */}
          <Route
            path="/well-rehabilitation"
            element={<WellRehabilitationIndex />}
          >
            <Route index element={<WellRehabilitation />} />
          </Route>

          {/* Well Diagnostics */}
          <Route path="/well-diagnostics" element={<WellIndex />}>
            <Route index element={<Well />} />
          </Route>

          {/* Hole Down Camera */}
          <Route path="/down-hole-camera" element={<HoleIndex />}>
            <Route index element={<Hole />} />
          </Route>

          {/* Plugging */}
          <Route path="/plugging" element={<PluggingIndex />}>
            <Route index element={<Plugging />} />
          </Route>

          {/* Wind Turbines */}
          <Route path="/wind-turbines" element={<WindIndex />}>
            <Route index element={<Wind />} />
          </Route>

          {/* Profile */}
          <Route path="/profiles" element={<ProfileIndex />}>
            <Route index element={<ProfilePage />} />
          </Route>


        

          <Route path="/admin" element={<AdminIndex />}>
            <Route index element={<Admin />} />
          </Route>
          <Route path="/customer" element={<CustomerPageIndex />}>
            <Route index element={<CustomerPage />} />
          </Route>


          {/* Catch-All */}
<Route path="*" element={<NoMatchFoundPage />} />
        </Routes>
      </Suspense>

      {/* Toast Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
