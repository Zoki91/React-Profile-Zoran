import React from "react";
import Footer from "../components/Footer";
import VideoBG from '../components/VideoBG'

const Home = () => {
  document.title = "Zoran - Portfolio"
  return (
    <div>
      <VideoBG />
      <Footer />
    </div>
  );
};

export default Home;