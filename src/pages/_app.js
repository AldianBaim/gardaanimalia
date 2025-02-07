// _app.js
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NextNProgress from "nextjs-progressbar";
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
      <main className="mx-4" style={{ paddingTop: "110px" }}>
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block text-center px-0">
            <div className="sticky-top" style={{ top: "100px" }}>
              <a href="https://drive.google.com/file/d/1FBhxNxF19PK1wQIfKHKNlyR-M8dJIJF7/view?usp=sharing" target="_blank">
                <img
                  src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/BANNER%20WEB-KIRI.png"
                  className="w-75 object-fit-cover sticky-top"
                  style={{ height: "88vh" }}
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <Component {...pageProps} />
            <Footer />
          </div>

          <div className="col-lg-2 d-none d-lg-block text-center px-0">
            <div className="sticky-top" style={{ top: "100px" }}>
              <a href="https://tessonilo.gardaanimalia.com" target="_blank">
                <img
                  src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/BANNER%20WEB-KANAN.png"
                  className="w-75 object-fit-cover sticky-top"
                  style={{ height: "88vh" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
