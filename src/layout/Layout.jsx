import React from "react";
import { NavbarDemo } from "../components/ui/aceternity/NavbarDemo";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <SmoothScrollWrapper>
      <NavbarDemo>
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </NavbarDemo>
    </SmoothScrollWrapper>
  );
}

export default Layout;
