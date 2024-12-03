import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import SectionSwiper from "@/components/Navbar/Section/SectionSwiper/SectionSwiper";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  
  return (
    <>
      <Head>
        <meta name="description" content="Kakawin Nitisastra, pedoman kebijaksanaan hidup, mengajarkan bahwa harimau dan hutan adalah saudara. Jika seseorang memiliki niat buruk" />
        <link rel="canonical" href="https://gardaanimalia.com/matinya-mitos-hutan-rimba-dan-harimau-di-tanah-jawa/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Matinya Mitos, Hutan Rimba, dan Harimau di Tanah Jawa" />
        <meta property="og:description" content="Kakawin Nitisastra, pedoman kebijaksanaan hidup, mengajarkan bahwa harimau dan hutan adalah saudara. Jika seseorang memiliki niat buruk" />
        <meta property="og:url" content="https://gardaanimalia.com/matinya-mitos-hutan-rimba-dan-harimau-di-tanah-jawa/" />
        <meta property="og:site_name" content="Garda Animalia" />
        <meta property="article:publisher" content="https://www.facebook.com/pembelasatwaliar" />
        <meta property="article:published_time" content="2023-12-21T23:10:43+00:00" />
        <meta property="og:image" content="https://gardaanimalia.com/wp-content/uploads/2023/12/foto-1.jpg" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="504" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="author" content="Aditya" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@gardaanimalia" />
        <meta name="twitter:site" content="@gardaanimalia" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Aditya" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="10 minutes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <img src="https://gardaanimalia.com/wp-content/uploads/2024/09/darurat-perlidungan-satwa.jpg" className="w-100 object-fit-cover mb-3 mt-3" height={"300px"} alt="" />

          <div className="row">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/air-dan-api-700x400.webp" className="w-100 object-fit-cover" height={"300px"} alt="" />
                <div className="card-body p-0">
                  <div className="row m-0">
                    <div className="col-lg-3 p-0">
                      <div className="card border border-danger rounded-0">
                        <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/air-dan-api-350x220.webp" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Air dan Api Diserahkan ke BKSDA Kalteng</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0">
                      <div className="card border-0">
                        <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/lutung-budeng-beacukai-350x220.webp" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Empat Satwa Langka Diduga Dibius sebelum...</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0">
                      <div className="card border-0">
                        <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/katak-spesies-baru-350x220.webp" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Spesies Baru Katak pohon Sematkan Nama Herpetog...</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0">
                      <div className="card border-0">
                        <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/topeng-monyet-ekor-panjang-350x220.webp" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Satire si Ekor Panjang Tak Berumur Panjang</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                    <div className="h5 m-0">Pos Terbaru</div>
                  </div>
                  {
                    [0,1,2].map((item, index) => (
                      <Link href="/satwa-liar" className="text-decoration-none text-dark">
                        <div className="row">
                          <div className="col-lg-4 mb-4">
                            <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/air-dan-api-180x130.webp" className="w-100 object-fit-cover" alt="" />
                          </div>
                          <div className="col-lg-8 py-2 px-0 text-xs">
                            <h6 className="m-0">Air dan Api Diserahkan ke BKSDA Kalteng</h6>
                            <div className="d-flex align-items-center gap-2 my-2">
                              <small className="badge bg-orange p-1 rounded-0">Berita</small>
                              <small>11/11/2024</small>
                            </div>
                            <small className="text-xs text-muted">Gardaanimalia.com – Dua anak owa jenggot putih (Hylobates albibarbis) yang diberi nama Air dan Api diserahkan oleh warga Sampit kepada…</small>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {
                [...Array(6)].map((item, index) => (
                  <div class="ratio ratio-16x9 mb-3">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w1GayXzWDRo?si=y9aVH7ID8GlozsBO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                ))
              }
            </div>
          </div>
          <SectionSwiper
            title={"Laporan Investigatif"}
            perView={4}
            background={["#8FAB5A", "#DADDD6"]}
          />
          <div className="row mt-3">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <div className="mt-3">
                  {
                    [0,1,2].map((item, index) => (
                      <div className="row">
                        <div className="col-lg-4 mb-4">
                          <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/air-dan-api-180x130.webp" className="w-100 object-fit-cover" alt="" />
                        </div>
                        <div className="col-lg-8 py-2 px-0 text-xs">
                          <h6 className="m-0">Air dan Api Diserahkan ke BKSDA Kalteng</h6>
                          <div className="d-flex align-items-center gap-2 my-2">
                            <small className="badge bg-danger p-1">Berita</small>
                            <small>11/11/2024</small>
                          </div>
                          <small className="text-xs">Gardaanimalia.com – Dua anak owa jenggot putih (Hylobates albibarbis) yang diberi nama Air dan Api diserahkan oleh warga Sampit kepada…</small>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <SectionSwiper
                title={"Konten Edukasi"}
                perView={3}
                background={["#FBEEEB", "#D95C46"]}
              />
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center mb-1">
                <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                <div className="h5 m-0">Pos Terbaru</div>
              </div>
              <div className="text-xs text-muted mb-3">Baca berita terbaru seputar satwa liar di sini</div>
              <div className="card position-relative mb-3">
                <img src="https://gardaanimalia.com/wp-content/uploads/2024/02/mep-kandang-350x220.webp" className="w-100" alt="" />
                <div className="d-flex p-3 gap-2 position-absolute bottom-0" style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))'}}>
                  <div className="d-flex align-items-center justify-content-center bg-orange text-white" style={{height: '80px', width: '140px'}}>1</div>
                  <div className="text-white">
                    <div className="text-xs">Jual konten penyiksaan monyet, pria asal Singkawan</div>
                    <div className="text-xs">11/11/2024</div>
                  </div>
                </div>
              </div>
              {
                [...Array(5)].map((item, index) => (
                  <div className="row mb-3">
                    <div className="col-lg-3 pe-0">
                      <div className="d-flex align-items-center justify-content-center text-white h-100" style={{background: '#D3442C'}}>1</div>
                    </div>
                    <div className="col-lg-9">
                      <div className="text-xs">Penyu Hijau Mati Terdampar di Pantai Legian, Diduga Dehidrasi</div>
                      <div className="text-xs text-muted">11/11/2024</div>
                    </div>
                  </div>
                ))
              }
              
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}
