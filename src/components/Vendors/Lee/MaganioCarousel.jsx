import clx from "classnames";

export default function MaganioCaroseal() {
  const data = [
    {
      img: "/assets/images/maganio/1461729308965_.pic.jpg",
      alt: "labtory",
    },
    {
      img: "/assets/images/maganio/1471729309149_.pic.jpg",
      alt: "factory",
    },
    {
      img: "/assets/images/maganio/1481729310129_.pic.jpg",
      alt: "product colors",
    },
    {
      img: "/assets/images/maganio/1491729310139_.pic.jpg",
      alt: "product introduction",
    },
    {
      img: "/assets/images/maganio/1501729310151_.pic.jpg",
      alt: "product gray color recovery",
    },
    {
      img: "/assets/images/maganio/9171729311187_.pic.jpg",
      alt: "coloring kits",
    },
  ];

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide max-height"
      data-bs-ride="carousel"
    >
      <div
        className="carousel-inner bg-dark"
        style={{ maxHeight: 300, overflow: "hidden" }}
      >
        {data.map((item, idx) => (
          <div className={clx("carousel-item", { active: idx === 0 })}>
            <center>
              <img
                src={item.img}
                className="d-block"
                alt={item.alt}
                style={{
                  height: 250,
                  overflowY: "hidden",
                  textAlign: "center",
                }}
              />
            </center>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
