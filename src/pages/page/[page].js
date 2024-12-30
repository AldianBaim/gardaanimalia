
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  const slug = context.params.page
  try {
    // Fetch data from external API
    const [postsRes, popularPostRes, pageRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/popular`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/detail/${slug}`),
    ]);

    const { data: posts } = await postsRes.json();
    const { data: popularPosts } = await popularPostRes.json();
    const { data: page } = await pageRes.json();

    // Pass data to the page via props
    return { props: { posts, popularPosts, page } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { notFound: true };
  }
}

export default function Page({posts, popularPosts, page}) {
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
        <main >
          <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2019.56.16.png" className="w-100 object-fit-cover mb-4" height={"300px"} alt="" />
          <div className="row">
            <div className="col-lg-8">
              <p className="lead" dangerouslySetInnerHTML={{ __html: page?.content }}></p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center mb-1">
                <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                <div className="h6 m-0">Pos Terbaru</div>
              </div>
              <div className="mb-3 small text-muted">Baca berita terbaru seputar satwa liar di sini</div>
              <Link href={`/${posts[0]?.slug}`} className="text-decoration-none text-dark">
                <div className="card position-relative mb-3 hover">
                  <img src={posts[0]?.picture} className="w-100" style={{filter: "brightness(70%)"}} alt="" />
                  <div className="d-flex p-3 gap-2 position-absolute bottom-0">
                    <div className="text-white">
                      <div className="text-xs">{posts[0]?.title}</div>
                      <div className="text-xs">{posts[0]?.created_at}</div>
                    </div>
                  </div>
                </div>
              </Link>
              {posts.slice(1).map((post, index) => (
                <Link href={`/${post.slug}`} key={index} className="text-decoration-none text-dark">
                  <div className="row mb-3 hover">
                    <div className="col-lg-3 pe-0">
                      <img src={post?.picture} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-9">
                      <div className="text-xs">{post.title}</div>
                      <div className="text-xs text-muted">{post.created_at}</div>
                    </div>
                  </div>
                </Link>
              ))}
              {posts.length === 0 && <div className="text-center text-muted">Belum ada pos terbaru</div>}
              <div className="d-flex align-items-center mb-1 mt-5">
                <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                <div className="h5 m-0">Bacaan Populer</div>
              </div>
              <div className="text-xs text-muted mb-3">Baca berita terbaru seputar satwa liar di sini</div>
              <Link href={`/${popularPosts[0]?.slug}`} className="text-decoration-none text-dark">
                <div className="card position-relative mb-3 hover">
                  <img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.03.11.png" className="w-100" alt="" />
                  <div className="d-flex p-3 gap-2 position-absolute bottom-0" style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))'}}>
                    <div className="d-flex align-items-center justify-content-center bg-orange text-white" style={{width: '140px'}}>1</div>
                    <div className="text-white">
                      <div className="text-xs text-ellipsis-2">{popularPosts[0]?.title}</div>
                      <div className="text-xs">{popularPosts[0]?.created_at}</div>
                    </div>
                  </div>
                </div>
              </Link>
              {
                popularPosts.slice(1).map((post, index) => (
                  <Link href={`/${post.slug}`} key={index} className="text-decoration-none text-dark">
                    <div className="row mb-3 hover">
                      <div className="col-lg-3 pe-0">
                        <div className="d-flex align-items-center justify-content-center text-white h-100" style={{background: '#D3442C'}}>{(index + 1) + 1}</div>
                      </div>
                      <div className="col-lg-9">
                        <div className="text-xs text-ellipsis-2">{post.title}</div>
                        <div className="text-xs text-muted">{post.created_at}</div>
                      </div>
                    </div>
                  </Link>
                ))
              }
              {popularPosts.length === 0 && <div className="text-center text-muted">Belum ada pos populer</div>}
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}
