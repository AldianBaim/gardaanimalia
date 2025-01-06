export default function CardHorizontal({ data }) {
  return (
    <div className="row hover mb-4 mb-lg-3">
      <div className="col-lg-4">
        <img
          src={data?.picture || "https://via.placeholder.com/150"}
          className="w-100 object-fit-cover rounded"
          alt={data?.title}
        />
      </div>
      <div className="col-lg-8 text-xs">
        <div className="m-0 mt-2 mt-lg-0">{data?.title}</div>
        <div className="d-flex flex-wrap d-block align-items-center gap-2 my-2">
          {data?.tags
            ?.split(",")
            .map((tag, index) => (
              <small key={index} className="badge bg-orange p-1 rounded-0">
                {tag}
              </small>
            ))
            .slice(0, 2)}
        </div>
        <small className="d-block mb-1">{data?.created_at}</small>
        <small className="text-xs text-muted">
          {data?.description || "Belum ada deskripsi"}
        </small>
      </div>
    </div>
  );
}
