import React from "react";
import Landing from "./pages/landing/Landing";
import Footer from "./pages/footer/Footer";
import { Navbar } from "./pages/navbar/Navbar";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </>
  );
}

export default App;
