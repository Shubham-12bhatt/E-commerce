import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from "./ScrollTop";


const AppLayout = () => {
 
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
