import React from "react";
import Navbar from "../components/Navbar";
import Baner from "../components/Baner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Baner />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
