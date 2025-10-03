import React from "react";
import { NavbarDemo } from "../components/ui/aceternity/NavbarDemo";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

function Layout({ children }) {
  return (
    <SmoothScrollWrapper>
      <NavbarDemo>{children}</NavbarDemo>
    </SmoothScrollWrapper>
  );
}

export default Layout;
