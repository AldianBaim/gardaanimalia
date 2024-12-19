import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-3 my-4">
			<div className="row">
				<div className="col-lg-6">
					<img src="https://gardaanimalia.com/wp-content/uploads/2023/06/logo-garda-animalia-1-e1687344519569.png" className="w-25 mb-3" alt="Brand" />
					<div className="d-flex gap-2 align-items-center text-muted mb-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path></svg>
						<small>Dari Sabang sampai Merauke, dari Miangas hingga pulau Rote, Indonesia</small>
					</div>
					<div className="d-flex gap-2 align-items-center text-muted mb-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path></svg>						
						<small>122</small>
					</div>
					<div className="d-flex gap-2 align-items-center text-muted mb-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path></svg>						
						<small><a href="mailto:redaksi@gardaanimalia.com" title="Send Mail" target="_blank" className="text-decoration-none text-muted">redaksi@gardaanimalia.com</a></small>
					</div>
				</div>
				<div className="col-lg-2 px-0">
					<div className="d-flex align-items-center mb-3">
						<div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
						<div className="h5 m-0">Label</div>
					</div>
					<ul class="list-group">
						<li class="list-group-item p-0 border-0 mb-1">
							<div className="d-flex align-items-center gap-1">
								<span className="text-danger">#</span>
								<Link href="/tag/satwa-dilindungi" className="text-decoration-none text-muted text-xs">satwa dilindungi</Link>
							</div>
						</li>
						<li class="list-group-item p-0 border-0 mb-1">
							<div className="d-flex align-items-center gap-1">
								<span className="text-danger">#</span>
								<Link href="/tag/satwa-liar" className="text-decoration-none text-muted text-xs">satwa liar</Link>
							</div>
						</li>
						<li class="list-group-item p-0 border-0 mb-1">
							<div className="d-flex align-items-center gap-1">
								<span className="text-danger">#</span>
								<Link href="/tag/harimau-sumatera" className="text-decoration-none text-muted text-xs">harimau sumatera</Link>
							</div>
						</li>
						<li class="list-group-item p-0 border-0 mb-1">
							<div className="d-flex align-items-center gap-1">
								<span className="text-danger">#</span>
								<Link href="/tag/hewan-dilindungi" className="text-decoration-none text-muted text-xs">hewan dilindungi</Link>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-lg-2">
					<div className="d-flex align-items-center mb-3">
						<div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
						<div className="h5 m-0">Kategori</div>
					</div>
					<ul class="list-group">
						<li class="list-group-item p-0 border-0 mb-1"><Link href="/category/berita" className="text-decoration-none text-muted text-xs">Berita</Link></li>
						<li class="list-group-item p-0 border-0 mb-1"><Link href="/category/hukum" className="text-decoration-none text-muted text-xs">Hukum</Link></li>
						<li class="list-group-item p-0 border-0 mb-1"><Link href="/category/edukasi" className="text-decoration-none text-muted text-xs">Edukasi</Link></li>
						<li class="list-group-item p-0 border-0 mb-1"><Link href="/category/opini" className="text-decoration-none text-muted text-xs">Opini</Link></li>
					</ul>
				</div>
				<div className="col-lg-2 px-0">
					<div className="d-flex align-items-center mb-3">
						<div style={{width: "10px", height: "17px", backgroundColor: "#DB9723", borderRadius: "3px"}} className="me-2"></div>
						<div className="h5 m-0">Halaman</div>
					</div>
					<ul class="list-group">
						<li class="list-group-item p-0 border-0 mb-2"><Link href="/page/tentang-kami" className="text-decoration-none text-muted text-xs">Tentang Kami</Link></li>
						<li class="list-group-item p-0 border-0 mb-2"><Link href="/page/susunan-redaksi" className="text-decoration-none text-muted text-xs">Susunan Redaksi</Link></li>
						<li class="list-group-item p-0 border-0 mb-2"><Link href="/page/pedoman-media-siber" className="text-decoration-none text-muted text-xs">Pedoman Media Siber</Link></li>
						<li class="list-group-item p-0 border-0"><Link href="/page/disclaimer" className="text-decoration-none text-muted text-xs">Disclaimer</Link></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}