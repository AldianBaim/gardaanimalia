import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Document() {

  const [banner1, setBanner1] = useState(true)
  const [banner2, setBanner2] = useState(true)

  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <main className="mx-4" style={{paddingTop: "100px"}}>
          <div className="row">
            <div className="col-lg-2 position-relative">
              <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/tesso%20nillo.jpeg" className="w-100 position-relative" alt="" />
            </div>

            <div className="col-lg-8">
              <Main />
              <Footer/>
            </div>

            <div className="col-lg-2">
              <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/tesso%20nillo.jpeg" className="w-100" alt="" />
            </div>
          </div>
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
