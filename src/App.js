import React from "react";
import "./index.css";
import Header from "./Header";
import Footer from "./footer";
import Content from "./Hero";
import Gallery from "./gallery";
import Pricing from "./Pricing";
import Contact from "./contact";

function App() {
  return (
      <div className="App">
        <Header></Header>
        <div className="overflow-hidden z-0">
          <Content name="Home" title="Home" id="Home"></Content>
          <Gallery name="Gallery" title="Gallery" id="Gallery"></Gallery>
          <Pricing name="Pricing" title="Pricing" id="Pricing"></Pricing>
          <Contact name="Contact" title="Contact" id="Contact"></Contact>
          <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
