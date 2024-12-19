'use client'

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardHorizontal from "@/components/global/Card/CardHorizontal/CardHorizontal";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`)
//   const post = await res.json()
//   // Pass data to the page via props
//   return { props: { post } }
// }

export default function Tag() {

  const [title, setTitle] = useState();
  const router = useRouter();
  
  useEffect(() => {
    setTitle(router.query.slug)
  }, [router.query.slug])

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
        
      >
        <main >
          <img src="https://gardaanimalia.com/wp-content/uploads/2024/09/darurat-perlidungan-satwa.jpg" className="w-100 object-fit-cover mb-3" height={"300px"} alt="" />
          <div className="d-flex align-items-center mb-3">
            <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
            <div className="h6 m-0">{title}</div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <div className="position-relative">
                  <img src="https://gardaanimalia.com/wp-content/uploads/2024/11/air-dan-api-700x400.webp" className="w-100 object-fit-cover mb-2 position-relative" style={{filter: "brightness(70%)"}} height={"300px"} alt="" />
                  <div className="position-absolute bottom-0 ms-3 mb-3 start-0 text-white">
                    <span className="badge bg-orange rounded-0">Berita</span>
                    <h4 className="w-75">Dari Medan menuju Jakarta, Dihentikan di Bakauheni</h4>
                    <small>11/11/2024</small>
                  </div>

                </div>
								<div className="mt-3">
                  {
                    [0,1,2].map((item, index) => (
                      <Link key={index} href="/satwa-liar" className="text-decoration-none text-dark">
                        <CardHorizontal />
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-4 sticky-top top-0">
              <div className="card position-relative mb-3">
                <img src="https://gardaanimalia.com/wp-content/uploads/2024/02/mep-kandang-350x220.webp" className="w-100" style={{filter: "brightness(70%)"}} alt="" />
                <div className="d-flex p-3 gap-2 position-absolute bottom-0">
                  <div className="text-white">
                    <div className="text-xs">Air dan Api Diserahkan ke BKSD</div>
                    <div className="text-xs">11/11/2024</div>
                  </div>
                </div>
              </div>
              {[...Array(5)].map((item, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col-lg-3 pe-0">
                      <img src="https://gardaanimalia.com/wp-content/uploads/2024/10/baning-coklat-150x150.webp" className="w-100" alt="" />
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
