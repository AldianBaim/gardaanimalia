// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function SectionSwiper({title, perView, background, color}) {
	return (
		<section className="p-3 mb-3" style={{background: `linear-gradient(to bottom, ${background[0]}, ${background[1]}`}}>
			<div className="d-flex align-items-center mb-3">
				<div style={{width: "10px", height: "17px", backgroundColor: "#fff", borderRadius: "3px"}} className="me-2"></div>
				<div className={`h5 m-0 ${color}`}>{title}</div>
			</div>
			<Swiper 
				spaceBetween={20}
				slidesPerView={perView}
				navigation={true}
			 	modules={[Navigation]} 
			 	className="mySwiper"
			>
				<SwiperSlide>
					<div className="card border-0 hover" style={{background: "rgba(255, 255, 255, 0.5"}}>
						<div className="position-relative">
							<img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.04.59.png?updatedAt=1734699908412" className="w-100 position-relative" alt="" />
							<span className="badge position-absolute bottom-0 start-0 m-2" style={{background: "#87A54C"}}>Investigasi</span>
						</div>
						<div className="card-body p-2">
							<small>Menelisik Jalur Paruh Bengkok Ilegal di Sulawesi</small>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card border-0 hover" style={{background: "rgba(255, 255, 255, 0.5"}}>
						<div className="position-relative">
							<img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.04.59.png?updatedAt=1734699908412" className="w-100 position-relative" alt="" />
							<span className="badge position-absolute bottom-0 start-0 m-2" style={{background: "#87A54C"}}>Investigasi</span>
						</div>
						<div className="card-body p-2">
							<small>Menelisik Jalur Paruh Bengkok Ilegal di Sulawesi</small>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card border-0 hover" style={{background: "rgba(255, 255, 255, 0.5"}}>
						<div className="position-relative">
							<img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.04.59.png?updatedAt=1734699908412" className="w-100 position-relative" alt="" />
							<span className="badge position-absolute bottom-0 start-0 m-2" style={{background: "#87A54C"}}>Investigasi</span>
						</div>
						<div className="card-body p-2">
							<small>Menelisik Jalur Paruh Bengkok Ilegal di Sulawesi</small>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card border-0 hover" style={{background: "rgba(255, 255, 255, 0.5"}}>
						<div className="position-relative">
							<img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.04.59.png?updatedAt=1734699908412" className="w-100 position-relative" alt="" />
							<span className="badge position-absolute bottom-0 start-0 m-2" style={{background: "#87A54C"}}>Investigasi</span>
						</div>
						<div className="card-body p-2">
							<small>Menelisik Jalur Paruh Bengkok Ilegal di Sulawesi</small>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="card border-0 hover" style={{background: "rgba(255, 255, 255, 0.5"}}>
						<div className="position-relative">
							<img src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/Screenshot%202024-12-20%20at%2020.04.59.png?updatedAt=1734699908412" className="w-100 position-relative" alt="" />
							<span className="badge position-absolute bottom-0 start-0 m-2" style={{background: "#87A54C"}}>Investigasi</span>
						</div>
						<div className="card-body p-2">
							<small>Menelisik Jalur Paruh Bengkok Ilegal di Sulawesi</small>
						</div>
					</div>
				</SwiperSlide>
      </Swiper>
		</section>
	)
}