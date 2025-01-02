import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SectionSwiper from "@/components/Navbar/Section/SectionSwiper/SectionSwiper";
import Link from "next/link";
import { useState } from "react";
import CardHorizontal from "@/components/global/Card/CardHorizontal/CardHorizontal";

export async function getServerSideProps() {

  try {

    const [postsRes, popularPostRes, postInvestigatifRes, postOpiniRes, postEdukasiRes, postLiputanKhususRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/popular`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/investigatif`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/opini`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/edukasi`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/byCategory/liputan-khusus`),
    ]);
    
    const { data: posts } = await postsRes.json();
    const { data: popularPosts } = await popularPostRes.json();
    const { data: postInvestigatif } = await postInvestigatifRes.json();
    const { data: postOpini } = await postOpiniRes.json();
    const { data: postEdukasi } = await postEdukasiRes.json();
    const { data: postLiputanKhusus } = await postLiputanKhususRes.json();
  
    // Pass data to the page via props
    return { props: { posts, popularPosts, postInvestigatif, postOpini, postEdukasi, postLiputanKhusus } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
  
}

export default function Home({posts, popularPosts, postInvestigatif, postOpini, postEdukasi, postLiputanKhusus}) {
  const [youtube] = useState([
    {
      id: "RNun7WCmB9I",
      embed: "wq-G6yVv_bzsFvtY"
    }, 
    {
      id: "r291XV3siCI",
      embed: "g1IQnFzY_UDZayHR"
    }, 
    {
      id: "yFyFZ5yQybs",
      embed: "6EEviR3fO61Fx-Nr"
    }, 
    {
      id: "SAK6dZaXY38",
      embed: "WCCXC1MYgRMxiJMZ"
    }, 
    {
      id: "g_wzrzhO_VM",
      embed: "J0CoFU0VaFtObfm2"
    }, 
    {
      id: "OvOWHO0Yvgw",
      embed: "Gwx_-Q_2hbW-w4X8"
    }
  ]);
    
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
          <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.16.png" className="w-100 object-fit-cover mb-3 mt-3" height={"300px"} alt="" />
          <div className="row">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.29.png" className="w-100 object-fit-cover" height={"300px"} alt="" />
                <div className="card-body p-0">
                  <div className="row m-0">
                    <div className="col-lg-3 p-0 border-top-hover">
                      <div className="card border-0 rounded-0">
                        <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.38.png" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Air dan Api Diserahkan ke BKSDA Kalteng</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0 border-top-hover">
                      <div className="card border-0">
                        <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.38.png" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Empat Satwa Langka Diduga Dibius sebelum...</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0 border-top-hover">
                      <div className="card border-0">
                        <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.38.png" alt="Cover" />
                        <div className="card-body p-2 bg-body-tertiary">
                          <h6>Spesies Baru Katak pohon Sematkan Nama Herpetog...</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0 border-top-hover">
                      <div className="card border-0">
                        <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.38.png" alt="Cover" />
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
                    posts?.map((post, index) => (
                      <Link key={index} href={`/${post?.slug}`} className="text-decoration-none text-dark">
                        <CardHorizontal data={post} />
                      </Link>
                    )).slice(0, 5)
                  }
                  {
                    posts?.length === 0 && (
                      <div className="text-center mt-4">
                        <h5>Belum ada post</h5>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {
                youtube.map((video, index) => (
                  <div key={index} class="ratio ratio-16x9 mb-3">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video?.id}?si=${video?.embed}`}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                )).sort( () => Math.random() - 0.5)
              }
            </div>
          </div>
          {postInvestigatif.length !== 0 && (
            <SectionSwiper
              title={"Laporan Investigatif"}
              badge={"investigatif"}
              perView={4}
              background={["#8FAB5A", "#DADDD6"]}
              color={"text-white"}
              data={postInvestigatif}
            />
          )}
          <div className="row">
            <div className="col-lg-8">
              <div className="card p-0 border-0">
                <div className="">
                {
                  posts?.map((post, index) => (
                    <Link key={index} href={`/${post?.slug}`} className="text-decoration-none text-dark">
                      <CardHorizontal data={post} />
                    </Link>
                  )).slice(5, 10)
                }
                </div>
              </div>
              {postInvestigatif.length !== 0 && (
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
              <div className="card p-0 border-0">
                <div className="mt-3">
                {
                  posts?.map((post, index) => (
                    <Link key={index} href={`/${post?.slug}`} className="text-decoration-none text-dark">
                      <CardHorizontal data={post} />
                    </Link>
                  )).slice(10, 20)
                }
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="d-flex align-items-center mb-1 mt-5">
              <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
              <div className="h5 m-0">Bacaan Populer</div>
            </div>
            <div className="text-xs text-muted mb-3">Baca berita terbaru seputar satwa liar di sini</div>
            <Link href={`/${popularPosts[0]?.slug}`} className="text-decoration-none text-dark">
              <div className="card position-relative mb-3">
                <img src={popularPosts[0]?.picture} className="w-100" alt="cover" />
                <div className="d-flex p-3 gap-2 position-absolute bottom-0" style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))'}}>
                  <div className="d-flex align-items-center justify-content-center bg-orange text-white" style={{width: '170px'}}>1</div>
                  <div className="text-white">
                    <div className="text-xs text-ellipsis-2">{popularPosts[0]?.title}</div>
                    <div className="text-xs">{popularPosts[0]?.created_at}</div>
                  </div>
                </div>
              </div>
            </Link>
            {
              popularPosts.slice(1).map((post, index) => (
                <Link href={`/${post.slug}`} key={index} className="row mb-3 text-decoration-none text-dark hover">
                  <div className="col-lg-3 pe-0">
                    <div className="d-flex align-items-center justify-content-center text-white h-100" style={{background: '#D3442C'}}>{(index + 1) + 1}</div>
                  </div>
                  <div className="col-lg-9">
                    <div className="text-xs text-ellipsis-2">{post?.title}</div>
                    <div className="text-xs text-muted d-flex gap-2">
                      <div>{post?.created_at}</div>
                      <div className="d-flex align-items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg>
                        <div>{post?.views}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}
