"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardHorizontal from "@/components/global/Card/CardHorizontal/CardHorizontal";
import SectionSwiper from "@/components/Navbar/Section/SectionSwiper/SectionSwiper";

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch data from external API
    const [
      postCategoryRes,
      popularPostRes,
      latestPostRes,
      postOpiniRes,
      postEdukasiRes,
      postLiputanKhususRes,
    ] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/${slug}`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/popular`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/opini`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/edukasi`),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/liputan-khusus`
      ),
    ]);

    const { data: posts } = await postCategoryRes.json();
    const { data: popularPosts } = await popularPostRes.json();
    const { data: latestPosts } = await latestPostRes.json();
    const { data: postOpini } = await postOpiniRes.json();
    const { data: postEdukasi } = await postEdukasiRes.json();
    const { data: postLiputanKhusus } = await postLiputanKhususRes.json();

    // Pass data to the page via props
    return {
      props: {
        posts,
        popularPosts,
        latestPosts,
        postOpini,
        postEdukasi,
        postLiputanKhusus,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

export default function Category({
  posts,
  popularPosts,
  latestPosts,
  postOpini,
  postEdukasi,
  postLiputanKhusus,
}) {
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
            className="w-100 object-fit-cover mb-4"
            height={"300px"}
            alt=""
          />
          <div className="row">
            <div className="col-lg-8">
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
                <div className="h6 m-0 text-capitalize">{title}</div>
              </div>
              <div className="mb-3 small text-muted">
                Temukan berita hewan langka hari ini secara cepat, lengkap, dan
                akurat hanya di gardaanimalia.com
              </div>
              <div className="card p-0 border-0">
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
                <div className="mt-3 mb-3">
                  {posts
                    ?.map((post, index) => (
                      <Link
                        key={index}
                        href={`/${post.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        <CardHorizontal data={post} />
                      </Link>
                    ))
                    .slice(0, 5)}
                  {posts?.length === 0 && (
                    <div className="text-center mt-4">
                      <h5>Belum ada post</h5>
                    </div>
                  )}
                </div>
                {postEdukasi.length !== 0 && (
                  <SectionSwiper
                    title={"Konten Edukasi"}
                    badge={"edukasi"}
                    perView={3}
                    background={["#FBEEEB", "#D95C46"]}
                    color={"text-dark"}
                    data={postEdukasi}
                  />
                )}
                {postOpini.length !== 0 && (
                  <SectionSwiper
                    title={"Kolom Opini"}
                    badge={"opini"}
                    perView={3}
                    background={["#FBEEEB", "#845C61"]}
                    color={"text-dark"}
                    data={postOpini}
                  />
                )}
                {postLiputanKhusus.length !== 0 && (
                  <SectionSwiper
                    title={"Liputan Khusus"}
                    badge={"liputan-khusus"}
                    perView={3}
                    background={["#FFF", "#38799F"]}
                    color={"text-dark"}
                    data={postLiputanKhusus}
                  />
                )}
                <div className="mt-3 mb-3">
                  {posts
                    ?.map((post, index) => (
                      <Link
                        key={index}
                        href={`/${post.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        <CardHorizontal data={post} />
                      </Link>
                    ))
                    .slice(5, 10)}
                  {posts?.length === 0 && (
                    <div className="text-center mt-4">
                      <h5>Belum ada post</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
                <div className="h5 m-0">Pos terbaru</div>
              </div>
              <div className="text-xs text-muted mb-3">
                Baca berita terbaru seputar satwa liar di sini
              </div>
              {latestPosts
                ?.map((post, index) => (
                  <Link
                    key={index}
                    href={`/${post?.slug}`}
                    className="text-decoration-none text-dark"
                  >
                    <CardHorizontal data={post} type="sidebar" />
                  </Link>
                ))
                .slice(0, 5)}
              {latestPosts?.length === 0 && (
                <div className="text-center mt-4">
                  <h5>Belum ada post</h5>
                </div>
              )}
              <div className="d-flex align-items-center mb-1 mt-5">
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
                    src={
                      `${popularPosts[0]?.picture}` ??
                      "https://via.placeholder.com/700"
                    }
                    className="w-100"
                    alt="Cover"
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
              {popularPosts.slice(1).map((post, index) => (
                <Link
                  href={`/${post.slug}`}
                  key={index}
                  className="row mb-3 text-decoration-none text-dark hover"
                >
                  <div className="col-lg-3 pe-0">
                    <div
                      className="d-flex align-items-center justify-content-center text-white h-100"
                      style={{ background: "#D3442C" }}
                    >
                      {index + 1 + 1}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="text-xs text-ellipsis-2">{post?.title}</div>
                    <div className="text-xs text-muted">{post?.created_at}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
