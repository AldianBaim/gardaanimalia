

export default function Slider() {
  return (
		<div
			id="carouselExample"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/HEADER%20WEB%202%20(2110%20px%20x%20430%20px)-2.png"
						className="w-100 object-fit-cover mb-3 mt-lg-3 rounded"
						alt="Slider 1"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/HEADER%20WEB%201%20(2110%20px%20x%20430%20px).png"
						className="w-100 object-fit-cover mb-3 mt-lg-3 rounded"
						alt="Slider 2"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://ik.imagekit.io/8jggdaymrs/gardaanimalia/JUBIR%20SARWA-COMING%20SOON.png"
						className="w-100 object-fit-cover mb-3 mt-lg-3 rounded"
						alt="Slider 3"
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
}