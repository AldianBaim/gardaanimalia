
export default function Navbar() {
	return (
		<div>
			<nav className="px-2">
				<div className="row justify-content-center">
					<div className="col-lg-9">
						<div className="d-flex align-items-center">
							<img src="https://gardaanimalia.com/wp-content/uploads/2023/06/logo_media-siber-e1687348109934.webp" className="me-auto" alt="" />
							<div className="w-50 d-flex align-items-center gap-2">
								<div className="small" style={{width: "45%"}}>Tuesday, November 26, 2024</div>
								<div className="mx-2">|</div>
								<div class="input-group" style={{ width: "40%" }}>
									<input type="text" className="form-control border-end-0 rounded-start-pill bg-body-tertiary small" placeholder="Search" />
									<span class="input-group-text rounded-end-pill">
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
									</span>
								</div>
								<button class="btn btn-sm m-0" type="button">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
								</button>
								<div class="dropdown">
									<button class="btn btn-sm m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="25px" viewBox="0 0 24 24" width="25px" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M5,11h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v4C3,10.1,3.9,11,5,11z"></path><path d="M5,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5c-1.1,0-2,0.9-2,2v4C3,20.1,3.9,21,5,21z"></path><path d="M13,5v4c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-4C13.9,3,13,3.9,13,5z"></path><path d="M15,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v4C13,20.1,13.9,21,15,21z"></path></g></g></svg>
									</button>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="#">Action</a></li>
										<li><a class="dropdown-item" href="#">Another action</a></li>
										<li><a class="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center p-2 text-white overflow-auto" style={{background: "linear-gradient(to right, #CC4630, #136491)"}}>
					<div className="col-lg-9">
						<div className="d-flex gap-4">
							<div>
								<a class="nav-link" href="#">Beranda</a>
							</div>
							<div>
								<a class="nav-link" href="#">Kabar Satwa</a>
							</div>
							<div>
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Telik
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Investigasi</a></li>
									<li><a class="dropdown-item" href="#">In-depth</a></li>
									<li><a class="dropdown-item" href="#">Feature</a></li>
									<li><a class="dropdown-item" href="#">Menjarah Rumah Gajah</a></li>
								</ul>
							</div>
							<div>
								<a class="nav-link" href="#">Opini</a>
							</div>
							<div>
								<a class="nav-link" href="#">Edukasi</a>
							</div>
							<div>
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Susastra
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Cerita Pendek</a></li>
									<li><a class="dropdown-item" href="#">Musik</a></li>
									<li><a class="dropdown-item" href="#">Puisi</a></li>
								</ul>
							</div>
							<div>
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Publikasi
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Jurnal</a></li>
									<li><a class="dropdown-item" href="#">Ulasan</a></li>
									<li><a class="dropdown-item" href="#">Infografis</a></li>
									<li><a class="dropdown-item" href="#">Video</a></li>
								</ul>
							</div>
							<div>
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Kontributor
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Bergabung</a></li>
									<li><a class="dropdown-item" href="#">Tugas Kontributor</a></li>
									<li><a class="dropdown-item" href="#">Kirim Aduan</a></li>
									<li><a class="dropdown-item" href="#">Laporkan Kejahatan!</a></li>
									<li><a class="dropdown-item" href="#">FAQ</a></li>
								</ul>
							</div>
							<div>
								<a class="nav-link" href="#">Indeks</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}