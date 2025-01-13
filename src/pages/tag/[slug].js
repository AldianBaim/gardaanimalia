"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardHorizontal from "@/components/global/Card/CardHorizontal/CardHorizontal";
import convertToTitleCase from "@/utils/helper";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  try {
    const [postsRes, popularPostRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byTag/${slug}`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/popular`),
    ]);

    const { data: posts } = await postsRes.json();
    const { data: popularPosts } = await popularPostRes.json();

    // Pass data to the page via props
    return {
      props: {
        posts,
        popularPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

export default function Tag({ posts, popularPosts }) {
  const [title, setTitle] = useState();
  const router = useRouter();

  useEffect(() => {
    setTitle(router.query.slug);
  }, [router.query.slug]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Kakawin Nitisastra, pedoman kebijaksanaan hidup, mengajarkan bahwa harimau dan hutan adalah saudara. Jika seseorang memiliki niat buruk"
        />
        <link
          rel="canonical"
          href="https://gardaanimalia.com/matinya-mitos-hutan-rimba-dan-harimau-di-tanah-jawa/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Matinya Mitos, Hutan Rimba, dan Harimau di Tanah Jawa"
        />
        <meta
          property="og:description"
          content="Kakawin Nitisastra, pedoman kebijaksanaan hidup, mengajarkan bahwa harimau dan hutan adalah saudara. Jika seseorang memiliki niat buruk"
        />
        <meta
          property="og:url"
          content="https://gardaanimalia.com/matinya-mitos-hutan-rimba-dan-harimau-di-tanah-jawa/"
        />
        <meta property="og:site_name" content="Garda Animalia" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/pembelasatwaliar"
        />
        <meta
          property="article:published_time"
          content="2023-12-21T23:10:43+00:00"
        />
        <meta
          property="og:image"
          content="https://gardaanimalia.com/wp-content/uploads/2023/12/foto-1.jpg"
        />
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
        <main>
          <img
            src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.16.png"
            className="w-100 object-fit-cover mb-3"
            height={"300px"}
            alt=""
          />

          <div className="row">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "10px",
                      height: "17px",
                      backgroundColor: "#DB9723",
                      borderRadius: "3px",
                    }}
                    className="me-2"
                  ></div>
                  <div className="h6 m-0">{convertToTitleCase(title)}</div>
                </div>
                <div className="position-relative">
                  <img
                    src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.29.png"
                    className="w-100 object-fit-cover mb-2 position-relative"
                    style={{ filter: "brightness(70%)" }}
                    height={"300px"}
                    alt=""
                  />
                  <div className="position-absolute bottom-0 ms-3 mb-3 start-0 text-white">
                    <span className="badge bg-orange rounded-0">Berita</span>
                    <h4 className="w-75">
                      Dari Medan menuju Jakarta, Dihentikan di Bakauheni
                    </h4>
                    <small>11/11/2024</small>
                  </div>
                </div>
                <div className="mt-3">
                  {posts?.map((post, index) => (
                    <Link
                      key={index}
                      href="/satwa-liar"
                      className="text-decoration-none text-dark"
                    >
                      <CardHorizontal data={post} />
                    </Link>
                  ))}
                  {posts?.length === 0 && (
                    <div className="text-center mt-4">
                      <h5>Belum ada post</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 sticky-top top-0">
              <div className="d-flex align-items-center mb-1">
                <div
                  style={{
                    width: "10px",
                    height: "17px",
                    backgroundColor: "#DB9723",
                    borderRadius: "3px",
                  }}
                  className="me-2"
                ></div>
                <div className="h5 m-0">Bacaan Populer</div>
              </div>
              <div className="text-xs text-muted mb-3">
                Baca berita terbaru seputar satwa liar di sini
              </div>
              <Link
                href={`/${popularPosts[0]?.slug}`}
                className="text-decoration-none text-dark"
              >
                <div className="card position-relative mb-3">
                  <img
                    src={popularPosts[0]?.picture}
                    className="w-100"
                    alt="cover"
                  />
                  <div
                    className="d-flex p-3 gap-2 position-absolute bottom-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center bg-orange text-white"
                      style={{ width: "170px" }}
                    >
                      1
                    </div>
                    <div className="text-white">
                      <div className="text-xs text-ellipsis-2">
                        {popularPosts[0]?.title}
                      </div>
                      <div className="text-xs">
                        {popularPosts[0]?.created_at}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {popularPosts
                .slice(1)
                .map((post, index) => (
                  <Link
                    href={`/${post.slug}`}
                    key={index}
                    className="row mb-3 text-decoration-none text-dark hover"
                  >
                    <div className="col-3 col-lg-3 pe-0">
                      <div
                        className="d-flex align-items-center justify-content-center text-white h-100"
                        style={{ background: "#D3442C" }}
                      >
                        {index + 1 + 1}
                      </div>
                    </div>
                    <div className="col-9 col-lg-9">
                      <div className="text-xs text-ellipsis-2">
                        {post?.title}
                      </div>
                      <div className="text-xs text-muted d-flex gap-2">
                        <div>{post?.created_at}</div>
                        <div className="d-flex align-items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="15px"
                            viewBox="0 0 24 24"
                            width="15px"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path>
                          </svg>
                          <div>{post?.views}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
                .slice(0, 6)}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
