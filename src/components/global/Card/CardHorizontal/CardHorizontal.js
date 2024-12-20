
export default function CardHorizontal({data}) {
	console.log(data)
	return (
		<div className="row hover">
			<div className="col-lg-4 mb-4">
				<img src={data?.picture} className="w-100 object-fit-cover rounded" alt={data?.title} />
			</div>
			<div className="col-lg-8 py-2 px-0 text-xs">
				<h6 className="m-0">{data?.title}</h6>
				<div className="d-flex align-items-center gap-2 my-2">
					{data?.tags?.split(",").map((tag, index) => (
						<small key={index} className="badge bg-orange p-1 rounded-0">{tag}</small>
					))}
					<small>{data?.created_at}</small>
				</div>
				<small className="text-xs text-muted">{data?.description}</small>
			</div>
		</div>
	);
}