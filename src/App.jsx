import { Button } from "@/components/ui/button";
import { MacbookScrollDemo } from "./components/ui/aceternity/MacbookScrollDemo";
import { StickyScrollRevealDemo } from "./components/ui/aceternity/StickyScrollDemo";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { StickyScrollWrapper } from "./components/ui/aceternity/StickyScrollWrapper";
import { CardHoverEffectDemo } from "./components/ui/aceternity/CardHoverEffectDemo";
import { ThreeDCardDemo } from "./components/ui/aceternity/ThreeDCardDemo";
import { NavbarDemo } from "./components/ui/aceternity/NavbarDemo";
import Home from "./pages/home";
import { Meteors } from "./components/ui/meteors";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
