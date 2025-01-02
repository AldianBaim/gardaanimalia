// _app.js
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NextNProgress from 'nextjs-progressbar';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <NextNProgress color="#FF869A" height={3} />
      <Navbar />
      <main className="mx-4" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-lg-2 text-center">
            <img
              src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/nillo"
              className="w-75"
              alt=""
            />
          </div>

          <div className="col-lg-8">
            <Component {...pageProps} />
            <Footer />
          </div>

          <div className="col-lg-2 text-center">
            <img
              src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/nillo"
              className="w-75"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
