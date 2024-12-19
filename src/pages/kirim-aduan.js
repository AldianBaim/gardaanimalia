
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KirimAduan() {
	const [data, setData] = useState([]);
  

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
          <img src="https://gardaanimalia.com/wp-content/uploads/2024/09/darurat-perlidungan-satwa.jpg" className="w-100 object-fit-cover mb-4" height={"300px"} alt="" />
          <div className="row">
            <div className="col-lg-8">
							<h3 className="mb-2">Kirim Aduan</h3>
              <p className="lead">Laporkan semua bentuk perdagangan, perburuan, pemeliharaan dan kekejaman terhadap satwa liar dilindungi. Laporan ini akan disampaikan kepada pihak berwenang untuk ditindaklanjuti. Bersama-sama kita bisa melindungi satwa liar di Indonesia!</p>
              <form action="" method="post">
								<div className="form-group mb-2">
									<label htmlFor="name" className="form-label">Nama <span className="text-danger">*</span></label>
									<input type="text" className="form-control mb-1" name="name" id="name" />
                  <p className="lead">Kerahasiaan pelapor dijamin, kontak hanya akan digunakan saat dibutuhkan keterangan tambahan.</p>
								</div>
								<div className="form-group mb-2">
									<label htmlFor="phone" className="form-label">Nomor Telepon *</label>
									<input type="text" className="form-control" name="phone" id="phone" />
								</div>
                <div className="form-group mb-2">
									<label htmlFor="email" className="form-label">Alamat Email *</label>
									<input type="email" className="form-control" name="email" id="email" />
								</div>
                <div className="form-group mb-2">
                  <label htmlFor="platform" className="form-label">Platform *</label>
                  <select id="" className="form-control mb-1">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                  <p className="text-muted">Offline: Pasar burung dan pasar hewan, Online: Perdagangan melalui facebook/instagram/e-commerce</p>
                </div>
                <div className="form-group mb-2">
									<label htmlFor="name" className="form-label">Lokasi Temuan <span className="text-danger">*</span></label>
									<input type="text" className="form-control mb-1" name="name" id="name" />
                  <p className="text-muted">Masukkan alamat jelas atau link website</p>
								</div>
                <div className="form-group mb-2">
									<label htmlFor="name" className="form-label">Hari dan Tanggal <span className="text-danger">*</span></label>
									<input type="date" className="form-control mb-1" name="name" id="name" />
								</div>
                <div className="form-group mb-2">
									<label htmlFor="name" className="form-label">Jenis Satwa <span className="text-danger">*</span></label>
									<input type="text" className="form-control mb-1" name="name" id="name" />
								</div>
								<div className="form-group mb-3">
									<label htmlFor="message" className="form-label">Keterangan lain *</label>
									<textarea id="message" className="form-control" rows={"5"}></textarea>
								</div>
								<div className="form-group mb-3">
									<label htmlFor="message" className="form-label">Untuk mempermudah penyelidikan, silahkan unggah foto lokasi dan satwa</label>
									<input type="file" className="form-control mb-1" name="name" id="name" />
								</div>
								<button type="submit" className="btn btn-dark rounded-0 shadow-sm">Submit</button>
							</form>

							<div className="d-flex mt-5 justify-content-evenly">
								<div className="d-flex align-items-center gap-2">
									<div className="d-flex gap-2">
										<a href="https://facebook.com/pembelasatwaliar" target="_blank">
											<img src="/logo/facebook.png" width={30} alt="" />
										</a>
									</div>
									<div className="d-flex gap-2">
										<a href="https://twitter.com/gardaanimalia" target="_blank">
											<img src="/logo/twitter.png" width={30} alt="" />
										</a>
									</div>
									<div className="d-flex gap-2">
										<a href="https://www.instagram.com/pembelasatwaliar" target="_blank">
											<img src="/logo/instagram.png" width={30} alt="" />
										</a>
									</div>
								</div>
								<a href="https://www.youtube.com/c/GARDAANIMALIA/videos" target="_blank" className="btn btn-danger rounded-0 shadow">Youtube</a>
							</div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center mb-1">
                <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                <div className="h6 m-0">Pos Terbaru</div>
              </div>
              <div className="mb-3 small text-muted">Baca berita terbaru seputar satwa liar di sini</div>
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
              <div className="d-flex align-items-center mb-1 mt-5">
                <div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
                <div className="h5 m-0">Bacaan Populer</div>
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
                  <Link href="/satwa-liar" key={index} className="row mb-3 text-decoration-none text-dark hover">
                    <div className="col-lg-3 pe-0">
                      <div className="d-flex align-items-center justify-content-center text-white h-100" style={{background: '#D3442C'}}>1</div>
                    </div>
                    <div className="col-lg-9">
                      <div className="text-xs">Penyu Hijau Mati Terdampar di Pantai Legian, Diduga Dehidrasi</div>
                      <div className="text-xs text-muted">11/11/2024</div>
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
