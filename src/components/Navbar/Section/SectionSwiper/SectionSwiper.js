// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function SectionSwiper({
  title,
  badge,
  perView,
  background,
  color,
  data,
}) {
  return (
    <section className="p-1 mb-4">
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
        <h5 className={`m-0 ${color}`}>{title}</h5>
        <Link href={`/category/${badge}`} className="ms-auto text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
          </svg>
        </Link>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={perView}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.4,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.5,
          },
        }}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`/${item.slug}`} className="text-decoration-none">
              <div
                className="card border-0 hover mt-1"
                style={{ background: "rgba(255, 255, 255, 0.5)" }}
              >
                <div className="position-relative">
                  <img
                    src={item.picture}
                    className="w-100 position-relative"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt=""
                  />
                  {/* <span
                    className="badge position-absolute bottom-0 start-0 m-2"
                    style={{ background: `${background[1]}` }}
                  >
                    {badge}
                  </span> */}
                </div>
                <div className="card-body p-0 pt-2">
                  <small className="text-ellipsis-2">{item.title}</small>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
