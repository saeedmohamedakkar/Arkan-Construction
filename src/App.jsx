// import { useEffect, useRef } from 'react'
// import Home from './pages/Home'
// import {
//   initSwipers,
//   initCounters,
//   initStickyHeader,
//   initReadingProgress,
//   initScrollToTop,
//   initReveals,
//   initCursorButtons,
//   initParallax,
//   initMobileNav,
// } from './behaviors'

// export default function App() {
//   const rootRef = useRef(null)

//   useEffect(() => {
//     const root = rootRef.current
//     if (!root) return

//     const swipers = initSwipers(root)
//     const cleanups = [
//       initCounters(root),
//       initStickyHeader(root),
//       initReadingProgress(root),
//       initScrollToTop(root),
//       initReveals(root),
//       initCursorButtons(root),
//       initParallax(root),
//       initMobileNav(root),
//     ]
//     return () => {
//       swipers.forEach((s) => { try { s.destroy(true, true) } catch (_) {} })
//       cleanups.forEach((fn) => { try { fn && fn() } catch (_) {} })
//     }
//   }, [])

//   return (
//     <div ref={rootRef} className="spaciaz-root">
//       <Home />
//     </div>
//   )
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./pages/NotFound";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";





import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  initSwipers,
  initCounters,
  initStickyHeader,
  initReadingProgress,
  initScrollToTop,
  initReveals,
  initCursorButtons,
  initParallax,
  initMobileNav,
} from "./behaviors";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WhoWeAre from "./pages/WhoWeAre";
import OurServices from "./pages/OurServices";
import PreviousWork from "./pages/PreviousWork";
import AccreditationsAndQuality from "./pages/AccreditationsAndQuality";
import BankingInstitutions from "./pages/BankingInstitutions";





function App() {

  useEffect(() => {
    const root = document;

    const swipers = initSwipers(root);

    const cleanups = [
      initCounters(root),
      initStickyHeader(root),
      initReadingProgress(root),
      initScrollToTop(root),
      initReveals(root),
      initCursorButtons(root),
      initParallax(root),
      initMobileNav(root),
    ];

    return () => {
      swipers.forEach((s) => {
        try {
          s.destroy(true, true);
        } catch { }
      });

      cleanups.forEach((fn) => {
        try {
          fn?.();
        } catch { }
      });
    };
  }, []);

  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/previous-work" element={<PreviousWork />} />
        <Route path="/accreditations-and-quality" element={<AccreditationsAndQuality />} />
        <Route path="/banking-institutions" element={<BankingInstitutions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;