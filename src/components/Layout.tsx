// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
