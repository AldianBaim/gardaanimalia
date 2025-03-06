export default function CardHorizontal({ data, type = "content" }) {
  return (
    <div className="row hover mb-4 mb-lg-3">
      <div className="col-4 pe-0">
        <img
          src={data?.picture || "https://via.placeholder.com/150"}
          className={`w-100 object-fit-cover ${
            type === "content" && "rounded"
          }`}
          alt={data?.title}
          height={type === "content" && "150px"}
        />
      </div>
      <div className="col-8 text-xs">
        {type === "content" && (
          <h6 className="m-0 mt-2 mt-lg-0">{data?.title}</h6>
        )}
        {type === "sidebar" && (
          <div className="m-0 mt-1 mt-lg-0">{data?.title}</div>
        )}
        <div
          className={`d-flex flex-wrap d-block align-items-center gap-2 ${
            type === "content" ? "my-2" : "my-1"
          }`}
        >
          {type === "content" && data?.category_name && (
            <small className="badge bg-orange p-1 rounded-0">
              {data.category_name}
            </small>
          )}
        </div>
        <small className="d-block mb-1">{data?.created_at}</small>
        {/* <small className="text-xs text-muted">
          {data?.description || "Belum ada deskripsi"}
        </small> */}
      </div>
    </div>
  );
}
