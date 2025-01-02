'use client'

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import CardHorizontal from "@/components/global/Card/CardHorizontal/CardHorizontal";

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch detail post and latest posts concurrently
    const [detailRes, latestPostRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/detail/${slug}`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`),
    ]);

    if (!detailRes.ok || !latestPostRes.ok) {
      throw new Error('Failed to fetch detail or latest posts');
    }

    const { data: post } = await detailRes.json();
    const { data: latestPosts } = await latestPostRes.json();

    // Extract tags from the post
    const tags = post.tags?.split(',') || [];

    // Fetch related posts for each tag
    const relatedPostPromises = tags.map((tag) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/related/${tag.trim()}`)
    );
    const relatedPostResponses = await Promise.all(relatedPostPromises);

    // Combine related posts, filtering out any failed requests
    const relatedPostData = await Promise.all(
      relatedPostResponses
        .filter((res) => res.ok)
        .map((res) => res.json())
    );

    const relatedPost = relatedPostData.flatMap(({ data }) => data);

    // Pass data to the page via props
    return { props: { post, latestPosts, relatedPost } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { notFound: true };
  }
}



export default function Detail({post, latestPosts, relatedPost}) {

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
          <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.16.png" className="w-100 object-fit-cover mb-3" height={"300px"} alt="" />
          <div className="row">
            <div className="col-lg-8 px-0">
              <div className="card p-0 border-0">
								<div className="d-flex gap-2 mb-2">
                  {post?.tags?.split(",")?.map((tag, index) => (
                    <span key={index} className="badge bg-orange rounded-0 p-1">{tag}</span>
                  ))}
								</div>
								<h3>{post?.title}</h3>
								<div className="d-flex align-items-center mb-4 mt-3 text-muted">
									<img src="https://secure.gravatar.com/avatar/?s=80&d=mm&r=g" width={"40px"} className="me-2 rounded-circle" alt="" />
									<div className="d-flex flex-column text-xs">
										<div className="d-flex gap-3">
											<span>Mutia Hanifah</span>
											<div>
												<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15px" viewBox="0 0 24 24" width="15px" fill="currentColor"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><path d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"></path></g></svg>
												<span className="ms-1">3 min read</span>
											</div>
										</div>
										<small className="">11/11/2024</small>
									</div>
									<div style={{width: "30px", height: "30px", backgroundColor: "#DB9723"}} className="rounded-circle d-flex align-items-center justify-content-center text-white ms-auto me-2">
										<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></svg>
									</div>
									<div style={{width: "30px", height: "30px", backgroundColor: "#3D5A98"}} className="rounded-circle d-flex align-items-center justify-content-center text-white">
										<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
									</div>
								</div>
                <img src={post?.picture} className="w-100 object-fit-cover mb-2" height={"300px"} alt="" />
								<small className="text-xs text-muted">{post?.description}</small>
								
								<div className="mt-3 mb-4">
									<p className="lead" dangerouslySetInnerHTML={{ __html: post?.content }}></p>
								</div>

								<div class="ratio ratio-16x9">
									<iframe width="560" height="315" src="https://www.youtube.com/embed/7Ib5m4YM9lk?si=ZE9BnC1JiHmtOtcj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
								<div className="d-flex gap-3 mt-4">
									<span className="badge bg-warning">Tags :</span>
                  {post?.tags?.split(",")?.map((tag, index) => (
                    <span key={index} className="badge bg-orange rounded-0 p-1">{tag}</span>
                  ))}
								</div>
								<div className="d-flex gap-3 mt-4">
									<div className="small border-start border-3 border-warning ps-1 bg-body-tertiary p-2">Writer: Mutia Hanifah</div>
									<div className="small border-start border-3 border-warning ps-1 bg-body-tertiary p-2">Editor: Bayu Nanda</div>
								</div>

								<div className="mt-4">
                  <div className="d-flex mb-4 gap-2">
                    <a href="#" className="d-flex align-items-center justify-content-center rounded-circle bg-gold text-white me-auto" style={{width: "40px", height: "40px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></svg>
                    </a>
                    <a href="#" className="d-flex align-items-center justify-content-center bg-gold rounded-circle text-white" style={{width: "40px", height: "40px", backgroundColor: "#3D5A98"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 320 512"><path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    </a>
                    <a href="#" className="d-flex align-items-center justify-content-center bg-gold rounded-circle text-white" style={{width: "40px", height: "40px", backgroundColor: "#000"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"></path></svg>                    
                    </a>
                    <a href="#" className="d-flex align-items-center justify-content-center bg-gold rounded-circle text-white" style={{width: "40px", height: "40px", backgroundColor: "#0088CB"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 448 512"><path fill="currentColor" d="m446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>                    
                    </a>
                    <a href="#" className="d-flex align-items-center justify-content-center bg-gold rounded-circle text-white" style={{width: "40px", height: "40px", backgroundColor: "#23D366"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.5em" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>                    
                    </a>
                  </div>
                  <div className="d-flex align-items-center mb-3">
										<div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
										<div className="h5 m-0">Pos Terkait</div>
									</div>
									<div className="row">
										{
											relatedPost.map((post, index) => (
												<div key={index} className="col-lg-4">
                          <Link href={`/${post?.slug}`} className="text-decoration-none text-dark">
                            <div className="card border-0 hover">
                              <div className="position-relative">
                                <img src={post?.picture || "https://via.placeholder.com/150"} className="w-100 position-relative rounded" alt="" />
                                {post?.tags?.split(",").map((tag, index) => (
                                  <span key={index} className="badge bg-orange rounded-0 position-absolute bottom-0 start-0 m-2">{tag}</span>
                                ))}
                              </div>
                              <div className="card-body p-0 py-2">
                                <h6>{post?.title}</h6>
                              </div>
                            </div>
                          </Link>
												</div>
											))
										}
                    {relatedPost.length === 0 && (
                      <div className="col-lg-12">
                        <div className="card border-0">
                          <div className="card-body p-0 py-2">
                            <h6 className="text-center">Belum ada pos terkait</h6>
                          </div>
                        </div>
                      </div>
                    )}
									</div>
								</div>
								<div className="mt-3">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                    <div className="h5 m-0">Pos Terbaru</div>
                  </div>
                  {
                    latestPosts.map((post, index) => (
                      <Link key={index} href={`/${post?.slug}`} className="text-decoration-none text-dark">
                        <CardHorizontal data={post} />
                      </Link>
                    ))
                  }
                  {
                    latestPosts.length === 0 && (
                      <div className="card border-0">
                        <div className="card-body p-0 py-2">
                          <h6 className="text-center">Belum ada pos terbaru</h6>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-4 sticky-top top-0">
              <div className="card position-relative mb-3">
                <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.03.11.png" className="w-100" alt="" />
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
                      <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.00.07.png" className="w-100" alt="" />
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
