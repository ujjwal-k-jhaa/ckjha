/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CosmicBackground } from "./components/CosmicBackground";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CaseStudy } from "./pages/CaseStudy";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative flex flex-col">
        <CosmicBackground />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
