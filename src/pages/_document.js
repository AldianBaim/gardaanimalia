import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <main className="mx-4" style={{paddingTop: "100px"}}>
          <div className="row">
            <div className="col-lg-2">
              <img src="https://gardaanimalia.com/wp-content/uploads/2024/01/tesso-nilo-kiri.webp" className="w-100" alt="" />
            </div>

            <div className="col-lg-8">
              <Main />
              <Footer/>
            </div>

            <div className="col-lg-2">
              <img src="https://gardaanimalia.com/wp-content/uploads/2024/01/tesso-nilo-kiri.webp" className="w-100" alt="" />
            </div>
          </div>
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
