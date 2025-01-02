'use client'

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export async function getServerSideProps(context) {
  const { keyword } = context.query;
  try {
    // Fetch detail post and latest posts concurrently
    const [postsRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/search?keyword=${keyword}`),
    ]);

    const { data: posts } = await postsRes.json();

    // Pass data to the page via props
    return { props: { posts } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { notFound: true };
  }
}

export default function Search({posts}) {
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
      <div>
        <main className={styles.main}>
          <div className="row mt-5">
            <div className="col-lg-12 ">
            <div className="d-flex align-items-center mb-3">
              <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
              <div className="h5">Hasil pencarian</div>
            </div>
            {
              posts.map((post, index) => (
                <Link key={index} href={`/${post?.slug}`} className="text-decoration-none text-dark">
                  <div className="row hover">
                    <div className="col-lg-4 mb-4">
                      <img src={post?.picture || "https://via.placeholder.com/150"} className="w-100 object-fit-cover rounded" alt="" />
                    </div>
                    <div className="col-lg-8 py-2 px-0 text-xs">
                      <h6 className="m-0">{post?.title}</h6>
                      <div className="d-flex align-items-center gap-2 my-2">
                        {post?.tags?.split(",").map((tag, index) => (
                          <small key={index} className="badge bg-orange p-1 rounded-0">{tag}</small>
                        )).slice(0, 3)}
                        <small>{post?.created_at}</small>
                      </div>
                      <small className="text-xs text-muted">{post?.description}</small>
                    </div>
                  </div>
                </Link>
              ))
            }
            {
              posts.length === 0 && (
                <div className="card border-0">
                  <div className="card-body p-0 py-2">
                    <h6 className="text-center">Tidak ada hasil pencarian</h6>
                  </div>
                </div>
              )
            }
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}
